const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Task } = require('../models/Task');
const { Event } = require('../models/Event');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {
  //api/events/:event_id/tasks/user/:user_id
  app.post('/api/events/:event_id/tasks/user/:user_id', authenticate, (req, res) => {
    const { taskDetails } = req.body
    if (!req.body.taskDetails) {
      const err = new Error('Missing `taskDetails` in request body');
      err.status = 400;
      return next(err);
    }

    Task
      // find user with the users array on the event 
      .create({
        //picks up the authenticated user, but want the user to choose which user 
        //(from list that have joined the 'event room') when creating the task
        // having some issues with trying to have username input
        user: req.params.user_id,
        event: req.params.event_id,
        taskDetails: req.body.taskDetails,
        completed: req.body.completed,
        // username: req.body.username
      })
      .then(newTask => {
        res.status(201).send(newTask);
      })
      .catch(err => { res.status(500).send(err) });
  });



  app.put('/api/tasks/by_event/:event_id/:task_id, authenticate', (req, res) => {
    console.log(req.body);

    Task.findOneAndUpdate(
      {
        event: req.params.event_id,
        _id: req.params.task_id,
      },
      {
        taskDetails: req.body.taskDetails,
        completed: req.body.completed
      }
    ).then(task => {
      res.send(task);
    })
      .catch(err => { res.status(500).send(err) });
  });

  app.get('/api/tasks/by_event_and_user/:event_id/:user_id', authenticate, (req, res) => {
    Task.find(
      {
        user: req.params.user_id,
        event: req.params.event_id
      }
    ).then((tasks) => {
      res.send({ tasks })
    })
      .catch(err => { res.status(500).send(err) });
  });

  // app.get('/api/tasks/:id',
  //   // authenticate, 
  //   (req, res) => {

  //     if (!ObjectID.isValid(req.params.id)) {
  //       return res.sendStatus(404);
  //     }

  //     Task.findById(req.params.id).then(task => {
  //       if (!task) {
  //         return res.sendStatus(404);
  //       }
  //       res.send({ task });
  //     })
  //       .catch(err => {
  //         console.error(err);
  //         res.status(500).json({ error: 'something went wrong' });
  //       });
  //   });

  app.delete('/api/tasks/:id', authenticate, (req, res) => {

    if (!ObjectID.isValid(req.params.id)) {
      return res.status(404).send('Invalid ID');
    }

    Task.findByIdAndRemove(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'something went wrong' });
      });
  });

};