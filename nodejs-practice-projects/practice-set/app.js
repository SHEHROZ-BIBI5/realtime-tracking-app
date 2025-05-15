 //  Core Module
const path = require('path');

//  External Module
const express = require('express');
const app = express(); //  app define

//  Routers (Local Modules)
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');

//  Middleware to log every request
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

//  Middleware to parse form data
app.use(express.urlencoded());

//  Use Routers
app.use(userRouter);           
app.use("/host", hostRouter);   

//  404 Page (if no route matches)
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// Server Start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
