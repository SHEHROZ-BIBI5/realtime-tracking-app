 // core modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();

// Local module
const rootDir = require('../utils/pathUtils');

// ✅ Login Page Route (http://localhost:3000/login)
userRouter.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

 
module.exports = userRouter;
