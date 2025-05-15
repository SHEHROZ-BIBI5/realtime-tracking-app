
 const express = require('express');
const app = express();
const PORT = 3000;

// ہوم پیج
app.get('/', (req, res) => {
  res.send('🌟 Welcome to Express.js API!');
});

// About صفحہ
app.get('/about', (req, res) => {
  res.send('یہ ہمارا about صفحہ ہے۔');
});

// API endpoint
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' }
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
