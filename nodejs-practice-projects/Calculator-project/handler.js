const { sumRequestHandler } = require('./sum');

const requesterHandler = (req, res) => {
  console.log(req.url, req.method);

  // Home Route - '/'
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Welcome</title></head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }

  // Calculator Form Route - '/calculator'
  else if (req.url.toLowerCase() === '/calculator') {
    res.setHeader('Content-Type', 'text/html'); 
    res.write(`
      <html>
        <head><title>Calculator in Node.js</title></head>
        <body>
          <h1>Here is the Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First Num" name="first">
            <input type="text" placeholder="Second Num" name="second">
            <input type="submit" value="Sum">
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  // Sum request handle karna
  else if (req.url.toLowerCase() === "/calculate-result" && req.method === 'POST') {
    return sumRequestHandler(req, res);
  }

  // Default 404 Page
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head><title>Not Found</title></head>
      <body>
        <h1>404 - Page Not Found</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>
  `);
  res.end();
};

module.exports.requesterHandler = requesterHandler;
