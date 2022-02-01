const express = require('express');
const authRoute = require('./auth.route');
const rootRoute = express.Router();

rootRoute.use(authRoute)

module.exports = rootRoute;

