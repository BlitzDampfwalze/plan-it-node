const { ObjectID } = require('mongodb');
const { Event } = require('../models/Event');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('/api/events', authenticate, (req, res) => {

    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      password: req.body.password,
      imageUrl: req.body.imageUrl
    });


    event.save().then(event => {
      res.status(201).send(event);
    })
      .catch(err => { res.status(500).send(err) });
  });

  // JOIN // find event and push/joins new user to it.
  app.post('/api/events/:event_id/join/:user_id', authenticate, (req, res) => {

    Event.findById(req.params.event_id)
      .then((event) => {

        if (event.users.length > 100) res.status(400).send;
        if (!event.users) {
          event.users = [];
        };
        if (event.users.indexOf(req.params.user_id) === -1) {
          event.users.push(req.params.user_id)
          event.save()
        };
        event.populate('users')
        res.status(200).send(event);
        
      })
      .catch(err => {
        console.log(err, "err")
        res.status(500).send(err)
      })
  });

  app.put('/api/events/:id', authenticate, (req, res) => {

    Event.findOneAndUpdate(
      {
        _id: req.params.id,
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

  app.get('/api/events', authenticate, (req, res) => {
      Event.find()
      .sort({title: 1})
        .then((events) => {
          res.send(events)
        })
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/api/events/:id', authenticate, (req, res) => {

    if (!ObjectID.isValid(req.params.id)) {
      return res.sendStatus(404);
    }

    Event.findById(req.params.id).populate('users')
      .then(event => {
        if (!event) {
          return res.sendStatus(404);
        }
        res.status(200).send(event);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'something went wrong' });
      });
  });

  app.delete('/api/events/:id', authenticate, (req, res) => {

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