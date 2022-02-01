const express = require('express');
const authRoute = express.Router();
const { loginDBUser} = require('../controllers/auth.controller')

authRoute.post('/auth/db', loginDBUser)

module.exports = authRoute;

