const express = require('express');
const routes = express.Router();
const userRoutes = require('./User');

routes.use(userRoutes);

module.exports = routes;