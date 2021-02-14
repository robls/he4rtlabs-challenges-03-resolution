const express = require('express');
const userRoutes = express.Router();
const UserController = require('../../controllers/User');
const authentication = require('../../../app/authentication');

userRoutes.get('/user', authentication, UserController.get);
userRoutes.post('/user', UserController.insert);
userRoutes.post('/login', UserController.login);
module.exports = userRoutes;
