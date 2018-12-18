const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Task } = require('../models/Task');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('/api/tasks', (req, res) => {
    const { taskName } = req.body
    if (!req.body.taskName) {
      const err = new Error('Missing `taskName` in request body');
      err.status = 400;
      return next(err);
    }

    Task
      .create({
        // user: req.user._id,
        event: req.body.username,
        taskName: req.body.taskName,
        completed: req.body.completed
      })
      .then(newTask => {
        res.status(201).send(newTask);
      })
      .catch(err => { res.status(500).send(err) });
  });



  app.put('/api/tasks/:id',
    // authenticate, 
    (req, res) => {
      console.log(req.body);

      Task.findOneAndUpdate(
        {
          _id: req.params.id,
          // userID: req.user._id 
        },
        {
          // username: req.body.username,
          taskName: req.body.taskName,
          completed: req.body.completed
        }
      ).then(task => {
        res.send(task);
      })
        .catch(err => { res.status(500).send(err) });
    });
  
  app.get('/api/tasks/by_event/:event_id', authenticate, (req, res) => {
    Task.find(
      {
        // user: req.user._id,
        event: req.params.event_id
      }
    ).then((tasks) => {
      res.send({ tasks })
    })
      .catch(err => { res.status(500).send(err) });
  });

  app.get('/api/tasks/:id',
    // authenticate, 
    (req, res) => {

      if (!ObjectID.isValid(req.params.id)) {
        return res.sendStatus(404);
      }

      Task.findById(req.params.id).then(task => {
        if (!task) {
          return res.sendStatus(404);
        }
        res.send({ task });
      })
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'something went wrong' });
        });
    });

  app.delete('/api/tasks/:id',
    // authenticate, 
    (req, res) => {

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