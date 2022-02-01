const express = require('express');
const authRoute = require('./auth.route');
const dbRoute = require('./db.route');
const rootRoute = express.Router();

rootRoute.use(authRoute)
rootRoute.use(dbRoute)

module.exports = rootRoute;

