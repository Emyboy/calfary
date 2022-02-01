const express = require('express');
const authRoute = express.Router();
const { loginDBUser, createAppUser} = require('../controllers/auth.controller')

authRoute.post('/auth/db', loginDBUser)
authRoute.post('/auth/app', createAppUser)

module.exports = authRoute;

