// 'use strict';
const { PORT, DATABASE_URL } = require('./config/config');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

// app.use(express.json()); 
// app.use('/auth', auth);
app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

require('./routes/eventRoutes')(app);
require('./routes/taskRoutes')(app);
require('./routes/scheduleRoutes')(app);
require('./routes/chatRoutes')(app);
require('./routes/userRoutes')(app);

// app.use('*', function (req, res) {
//   res.status(404).json({ message: 'Not Found' });
// });

// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run
let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, { useNewUrlParser: true }, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
        .on('error', err => {
          mongoose.disconnect();
          reject("Unable to connect to port. Disconnecting Mongoose.");
        });
    })
      .catch(err => {
        console.log("Unable to connect to Mongoose.");
      });
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  // console.log(DATABASE_URL, PORT);
  runServer(DATABASE_URL, PORT).catch(err => {
    console.log(`In ${require.main.filename}`);
    console.error(err);
  });
}

module.exports = { runServer, app, closeServer };