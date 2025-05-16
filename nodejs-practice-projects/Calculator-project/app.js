const http = require('http');
const { requesterHandler } = require('./handler');

const server = http.createServer(requesterHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is running at address http://localhost:${PORT}`);
});
