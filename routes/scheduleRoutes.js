const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Schedule } = require('../models/Schedule');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('/api/schedule', (req, res) => {
    const schedule = Schedule.create({
      event: req.body.event || req.body.eventID, //pass the event-id in on the front-end
      date: req.body.date,
      time: req.body.number,
      details: req.body.details
    })
    .then(schedule => {
      res.send(schedule);
    })

  })

  app.post('/api/schedules', (req, res) => {
    console.log(req.body);

    const schedule = new Schedule({
      date: req.body.date,
      time: req.body.number,
      details: req.body.details
    });

    schedule.save().then(schedule => {
      res.send(schedule);
    })
      .catch(err => { res.status(500).send(err) });
  });

  app.put('/api/schedules/:id',
    // authenticate, 
    (req, res) => {
      console.log(req.body);

      Schedule.findOneAndUpdate(
        {
          _id: req.params.id,
          // userID: req.user._id 
        },
        {
          date: req.body.date,
          time: req.body.number,
          details: req.body.details
        }
      ).then(schedule => {
        res.send(schedule);
      })
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/api/schedules',
    // authenticate, 
    (req, res) => {
      Schedule.find(
        // { userID: req.user._id }
      ).then((schedules) => {
        res.send({ schedules })
      }) //{} syntax vs res.json(...map etc.)
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/api/schedules/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.sendStatus(404);
      }

      Schedule.findById(req.params.id).then(schedule => {
        if (!schedule) {
          return res.sendStatus(404);
        }
        res.send({ schedule });
      })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

  app.delete('/api/schedules/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.status(404).send('Invalid ID');
      }

      Schedule.findByIdAndRemove(req.params.id)
        .then(() => {
          res.sendStatus(204);
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

};