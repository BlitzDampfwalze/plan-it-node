const { ObjectID } = require('mongodb');
const { Schedule } = require('../models/Schedule');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('/api/events/:event_id/schedule', authenticate, (req, res) => {
    console.log('req.body', req.body, 'req.params', req.params)
    const schedule = new Schedule({
      event: req.params.event_id,
      date: req.body.date,
      details: req.body.details,
      location: req.body.location
    });
    console.log('schedule', schedule)
    schedule.save().then(schedule => {
      res.send(schedule);
    })
      .catch(err => {
        console.log('err', err)
        res.status(500).send(err)
      });
  });

  app.put('/api/events/:event_id/schedule/:schedule_id', authenticate, (req, res) => {
    Schedule.findOneAndUpdate(
      {
        event: req.params.event_id,
        _id: req.params.schedule_id,
      },
      {
        date: req.body.date,
        details: req.body.details,
        location: req.body.location
      },
      { new: true }
    ).then(schedule => {
      console.log('SCHEDULE', schedule)
      res.send(schedule);
    })
      .catch(err => { res.status(500).send(err) });
  });

  app.get('/api/events/:event_id/schedule', authenticate, (req, res) => {
    Schedule.find({ event: req.params.event_id })
      .sort({ date: 1 })
      //alternative which also returns a promise, if no callback is passed
      // .exec(function (err, schedules) {
      //   if (err) { return res.status(500).send(err) }
      //   return res.send(schedules)
      // })
    .then((schedules) => {
      res.send(schedules)
    })
    .catch(err => { res.status(500).send(err) });

  });
  

  app.delete('/api/events/:event_id/schedule/:schedule_id', authenticate, (req, res) => {
    if (!ObjectID.isValid(req.params.schedule_id)) {
      return res.status(404).send('Invalid ID');
    }

    Schedule.findByIdAndRemove(req.params.schedule_id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'something went wrong' });
      });
  });

};