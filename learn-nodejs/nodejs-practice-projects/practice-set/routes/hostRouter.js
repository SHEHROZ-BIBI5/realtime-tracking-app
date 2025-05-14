 const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils');

 
// Contact Page Route
hostRouter.get('/contact', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));

 });

// Register Page Route
hostRouter.get('/register', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'register.html'));
});

// Register Page Route (GET)
hostRouter.get('/register', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'register.html'));
});
//  Handle Contact Form Submission (POST)
hostRouter.post('/register', (req, res) => {
   console.log('Form Submitted:', req.body);

  // Show registration success page
  res.sendFile(path.join(rootDir, 'views', 'register.html'));
});

module.exports = hostRouter;
