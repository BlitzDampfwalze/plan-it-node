const _ = {
  pick: require('lodash.pick'),
  isboolean: require('lodash.isboolean')
};

const { ObjectID } = require('mongodb');
const { Task } = require('../models/Task');
const { Event } = require('../models/Event');
const { User } = require('../models/User');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {
  app.post('/api/events/:event_id/tasks/user/:user_id', authenticate, (req, res) => {

    const { taskDetails } = req.body
    if (!req.body.taskDetails || !req.params.user_id) {
      const err = new Error('Missing `taskDetails` in request body');
      err.status = 400;
      return next(err);
    }
    // const user = User.findbyId(req.params.user_id)
    // console.log("USER", user)
    Task
      .create({
        user: req.params.user_id,
        event: req.params.event_id,
        taskDetails: req.body.taskDetails,
        completed: req.body.completed,
      })
      //   .then(newTask => {
      //     res.status(201).send(newTask);
      //   })
      // const task = new Task({
      //   user: req.params.user_id,
      //   event: req.params.event_id,
      //   taskDetails: req.body.taskDetails,
      //   completed: req.body.completed,
      // });
      // task
      // .populate('user')
      // .save()
      .then(task => {
        // console.log(task)

        User.findById(
          req.params.user_id
        )
          .then(user => {
            // console.log('USER', user)
            user.tasks.push(task._id)
            user.save()
            task.user = user;
            res.status(200).send(task)
          })
          .catch(err => window.alert(err))
      })
      .catch(err => { res.status(500).send(err) });
  });



  app.put('/api/events/:event_id/tasks/:task_id', authenticate, (req, res) => {

    Task.findOneAndUpdate(
      {
        event: req.params.event_id,
        _id: req.params.task_id,
      },
      {
        taskDetails: req.body.taskDetails,
        completed: req.body.completed
      },
      {
        new: true
      }
    )
      // .populate({ path: 'user', select: 'username email _id' }) 
      .populate('user', 'username email')
      .then(task => {
        console.log('Populated TASK:', task)
        res.status(200).send(task);
      })
      .catch(err => { res.status(500).send(err) });

  });

  app.get('/api/events/:event_id/tasks/user/:user_id', authenticate, (req, res) => {

    Task.find(
      {
        user: req.params.user_id,
        event: req.params.event_id
      }
    ).then((tasks) => {
      res.send(tasks)
    })
      .catch(err => { res.status(500).send(err) });

  });

  app.get('/api/events/:event_id/tasks', authenticate, (req, res) => {

    Task.find(
      {
        event: req.params.event_id
      }
    )
      .populate('user')
      .then((tasks) => {
        // console.log('TASK FROM EVENT', tasks)
        res.send(tasks)
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

  app.delete('/api/events/:event_id/tasks/:task_id', authenticate, (req, res) => {

    if (!ObjectID.isValid(req.params.task_id)) {
      return res.status(404).send('Invalid ID');
    }
    //for loop over deleting many without taking in the task-id params,
    Task.findByIdAndRemove(req.params.task_id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'something went wrong' });
      });
  });

};