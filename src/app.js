// index.js

// Import required modules
const http = require('http');

// Create a simple HTTP server that responds with "Hello, Docker!" for all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Uploaded to ECR!\n');
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
