'use strict';
require('dotenv').config();

exports.PORT = process.env.PORT || 3002;
exports.API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'https://plan-it-react-capstone.herokuapp.com/';
// exports.API_ORIGIN = process.env.REACT_APP_API_ORIGIN || 'mongodb://localhost/plan-it-test';
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.TEST_DATABASE_URL = 'mongodb://localhost/plan-it-test'
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';