const pick = require('lodash.pick');

const { User } = require('../models/User');
const { authenticate } = require('../middleware/authenticate');

const jwt = require('jsonwebtoken');

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
        console.log('user login', user)
        return user.generateAuthToken().then(token => {
          res.send({ id: user._id, email: user.email, username: user.username, token })
        });
      })
      .catch(err => {
        res.status(401).send(err);
      });
  });
  
  const createAuthToken = function(user) {
    return jwt.sign({user}, config.JWT_SECRET, {
      subject: user.username,
      expiresIn: config.JWT_EXPIRY,
      algorithm: 'HS256'
    });
  };
  // The user exchanges a valid JWT for a new one with a later expiration
  app.post('/api/users/refresh', authenticate, (req, res) => {
    const authToken = createAuthToken(req.user);
    res.json({authToken});
  });


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
};