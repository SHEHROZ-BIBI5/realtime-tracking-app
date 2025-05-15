const http = require('http');
const fs = require('fs');
const path = require('path');
const { log } = require('console');

// Filer ka path define karen
const filePath = path.join(__dirname, 'user_data.csv');

// Filer ki existence check karen
if (!fs.existsSync(filePath)) {
  // Agar file nahi hai toh header write karen
  fs.writeFileSync(filePath, '"Username", "Gender"\n');
}

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>My first Node.js Practice</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br><br>');

    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"><br>');

    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');

    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  // POST request ka data handle karna
  else if (req.url === '/submit-details' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
     console.log(chunk);
      // body += chunk.toString(); // Data ko string me convert karna
    });

    req.on('end', () => {
      const parsedData = new URLSearchParams(body);
      const username = parsedData.get('username');
      const gender = parsedData.get('gender');

      // CSV format mein data ko likhna
      const csvData = `"${username}","${gender}"\n`;
      fs.appendFileSync(filePath, csvData);  // Append data to CSV file

      // Redirect to home page after successful submission
      res.statusCode = 302;
      res.setHeader('Location', '/');

      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>My Practice on Node.js</title></head>');
      res.write('<body>');
      res.write('<h2>Form Submitted Successfully!</h2>');
      res.write(`<p>Thank you, ${username} 😊</p>`);
      res.write('</body></html>');
      res.end();
    });
  }
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
