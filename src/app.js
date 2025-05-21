const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files

// Routes
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

module.exports = app;
