const express = require('express');
const userRoutes = express.Router();
const { createUser, loginUser } = require('../controllers/user');
// Create a new user
userRoutes.post('/user', createUser);

// Login user
userRoutes.post('/auth', loginUser);

module.exports = userRoutes;
