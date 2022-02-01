const express = require('express');
const dbRoute = express.Router();
const { getAllDatabase} = require('../controllers/db.controller')

dbRoute.get('/db', getAllDatabase)

module.exports = dbRoute;

