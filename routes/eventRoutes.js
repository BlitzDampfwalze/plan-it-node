const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Event } = require('../models/Event');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('/api/events',
    // authenticate, 
    (req, res) => {
      console.log(req.body);

      const event = new Event({
        title: req.body.title,
        description: req.body.description,
      });

      event.save().then(event => {
        res.send(event);
      })
        .catch(err => { res.status(500).send(err) });
    });

  //grab event and push new user to it. check that user is not already in the array.
  // app.post('api/events/:id/join') {
  //   Event.findOneAndUpdate()
  // }

  app.put('/api/events/:id',
    // authenticate, 
    (req, res) => {
      console.log(req.body);

      Event.findOneAndUpdate(
        {
          _id: req.params.id,
          // userID: req.user._id 
        },
        {
          title: req.body.title,
          description: req.body.description
        }
      ).then(event => {
        res.send(event);
      })
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/api/events',
    authenticate,
    (req, res) => {
      Event.find(
        // { userID: req.user._id }
      ).then((events) => {
        res.send({ events })
      }) //{} syntax vs res.json(...map etc.)
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/api/events/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.sendStatus(404);
      }

      Event.findById(req.params.id).then(event => {
        if (!event) {
          return res.sendStatus(404);
        }
        res.send({ event });
      })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

  app.delete('/api/events/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send('Invalid ID');
      }

      Event.findByIdAndRemove(req.params.id)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

};