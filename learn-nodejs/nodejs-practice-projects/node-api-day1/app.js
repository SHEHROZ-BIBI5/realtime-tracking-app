const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('welcom to node web');
});

// app.get('/about', (req, res) => {
//   res.send('Hello, I am about page');
// });

// app.get('/shehroz', (req, res) => {
//   res.send('Hello, I am Shehroz');
// });

// app.get('/bibi', (req, res) => {
//   res.send('Hello, I am Bibi');
// });

// app.get('/info', (req, res) => {
//   const age = req.query.age || '40';
// const city = req.query.city || 'shehroz-bibi';
//    res.send(`You are ${age} years old and live in ${city}.`);
// });

// app.get( '/name'  , (req,res) => {
//   const name = req.query.name || 'rabia'
//   const classfellow = req.query.number || '2333'
//   res.end(`i am sheroz and my sisiter name ${name} and classfolower is ${classfellow}`);
// });

// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id || 'sdfsd';
//   res.send(`User ID is: ${userId}`);
// });

// app.get ( '/fenc/:name' , (req, res) => {
//   const fencName = req.query.name || 'shehdd' ;
// console.log(`informetion is :${fencName}`);

// });
 




app.get( '/info' ,(req, res) => {
  const age = 25 ;
  const city = 'Lahore';
  console.log(`this is your informetion: age ${age} , city ${city}`);
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
