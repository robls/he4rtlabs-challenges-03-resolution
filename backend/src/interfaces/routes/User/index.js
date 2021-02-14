const express = require('express');
const userRoutes = express.Router();
const UserController = require('../../controllers/User');

userRoutes.get('/user', UserController.get);
userRoutes.post('/user/insert', UserController.insert);
userRoutes.post('/user/login', UserController.login);
module.exports = userRoutes;
