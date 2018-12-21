'use strict';
const { PORT, DATABASE_URL } = require('./config/config');
const express = require('express');
// const cors = require('cors'); //
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// var http = require('http'); //for socket.io
// var socket_io = require('socket.io'); //for socket.io

const app = express();

// var serverSocket = http.Server(app); //for socket.io
// var io = socket_io(serverSocket); //for socket.io
// app.use(cors()); //
// app.options('*', cors()); //

// app.use(express.json()); 

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

let server;

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

if (require.main === module) {
  // console.log(DATABASE_URL, PORT);
  runServer(DATABASE_URL, PORT).catch(err => {
    console.log(`In ${require.main.filename}`);
    console.error(err);
  });
}


// io.on('connection', (socket) => {

//   socket.on('SEND_MESSAGE', function(data){
//       io.emit('RECEIVE_MESSAGE', data);
//   });

//   socket.on('USER_LOGGEDIN', function(user) {
//       io.emit('LOG_USER', user);
//   });
// });


module.exports = { runServer, app, closeServer };