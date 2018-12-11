'use strict';
require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL;
// exports.TEST_DB_URL = process.env.TEST_DB_URL;
// exports.key = process.env.key;
exports.PORT = process.env.PORT || 3002;
// exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'https://plan-it-node.herokuapp.com/';