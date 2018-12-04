const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Task } = require('../models/Task');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {

  app.post('/tasks', (req, res) => {
    console.log(req.body);

    const task = new Task({
      // userID: req.user._id,
      // userName: req.body.userName,
      taskName: req.body.taskName,
      completed: req.body.completed
    });

    task.save().then(task => {
      res.send(task);
    })
      .catch(err => { res.status(500).send(err) });
  });

  app.put('/tasks/:id',
    // authenticate, 
    (req, res) => {
      console.log(req.body);

      Task.findOneAndUpdate(
        {
          _id: req.params.id,
          // userID: req.user._id 
        },
        {
          // userName: req.body.userName,
          taskName: req.body.taskName,
          completed: req.body.completed
        }
      ).then(task => {
        res.send(task);
      })
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/tasks/by_event/:event_id',
    authenticate, 
    (req, res) => {
      Task.find(
        // { userID: req.user._id }
        {
          user: req.user._id,
          event: req.params.event_id
        }
      ).then((tasks) => {
        res.send({ tasks })
      }) 
        .catch(err => { res.status(500).send(err) });
    });

  app.get('/tasks/:id',
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

  app.delete('/tasks/:id',
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