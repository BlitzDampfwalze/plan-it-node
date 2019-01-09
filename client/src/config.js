module.exports = {
  PORT: process.env.PORT || 3002,
  // other stuff
  API_ORIGIN: process.env.REACT_APP_API_ORIGIN ||
    "http://localhost:3002"
};

// exports.API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'http://localhost:3002';

// 'https://plan-it-node.herokuapp.com/';