const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Chat } = require('../models/Chat');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('/messages', (req, res) => {
    console.log(req.body);

    const event = new Chat({
      // userID: req.user._id,
      // eventID: req.event._id,
      message: req.body.message
    });

    event.save().then(event => {
      res.send(event);
    })
      .catch(err => { res.status(500).send(err) });
  });

  app.put('/messages/:id',
    // authenticate, 
    (req, res) => {
      console.log(req.body);

      Chat.findOneAndUpdate(
        {
          _id: req.params.id,
          // userID: req.user._id 
        },
        {
          message: req.body.message
        }
      ).then(event => {
        res.send(event);
      })
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/messages',
    // authenticate, 
    (req, res) => {
      Chat.find(
        // { userID: req.user._id }
      ).then((messages) => {
        res.send({ messages })
      }) //{} syntax vs res.json(...map etc.)
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/messages/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.sendStatus(404);
      }

      Chat.findById(req.params.id).then(event => {
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

  app.delete('/messages/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send('Invalid ID');
      }

      Chat.findByIdAndRemove(req.params.id)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

};