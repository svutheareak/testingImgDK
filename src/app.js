const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

module.exports = app;
