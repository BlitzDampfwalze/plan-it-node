const pick = require('lodash.pick');

const { User } = require('../models/User');
const { authenticate } = require('../middleware/authenticate');

module.exports = app => {
  //User sign-up route
  app.post('/api/users', (req, res) => {
    console.log(req.body);
    // const body = pick(req.body, ['email', 'password', 'username']);
    // const user = new User(req.body); //no need to create user manually; above is validated
    let user;
    User
      .create(req.body)
      // .save()
      .then((newUser) => {
        user = newUser
        return newUser.generateAuthToken();
      })
      .then(token => {
        res.send({ id: user._id, email: user.email, username: user.username, token })
      })
      .catch(err => {
        console.log(err)
        if (err.code === 11000) {
          return res.status(409).send({ message: 'username/email taken' })
        }
        res.sendStatus(500);
      });
  });

  //User authentication route
  app.get('/api/users/auth', authenticate, (req, res) => {
    res.send(req.user);
  });

  //User login route
  app.post('/api/users/login', (req, res) => {
    const body = pick(req.body, ['email', 'password']);
    User.findByCredentials(body.email, body.password)
      .then(user => {
        // console.log('user login', user)
        return user.generateAuthToken().then(token => {
          res.send({ id: user._id, email: user.email, username: user.username, token })
        });
      })
      .catch(err => {
        res.status(401).send(err);
      });
  });


  // The user exchanges a valid JWT for a new one with a later expiration
  app.post('/api/users/refresh', authenticate, (req, res) => {
    req.user.generateAuthToken().then(token => {
      // res.json({ id: req.user._id, email: req.user.email, username: req.user.username, token:token[0] })
      res.json({ id: req.user._id, email: req.user.email, username: req.user.username, token })
    })

  });

  //Logout route
  app.delete('/api/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(
      () => {
        res.status(200).send();
      },
      () => {
        res.status(400).send();
      },
    );
  });

  // app.get('/api/users/:user_id', authenticate, (req, res) => {

  // })

  // app.get('/api/users/:user_id/events/:event_id/tasks', authenticate, (req, res) => {
  //   User.find(
  //     {
  //       user: req.params.user_id
  //     }
  //   )
  //     .then(({ tasks }) => {
  //       console.log('TASKS', tasks)
  //       res.send(tasks)
  //     })
  //     .catch(err => { res.status(500).send(err) })
  // })




};

