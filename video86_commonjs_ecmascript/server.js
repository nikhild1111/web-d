// // const { createServer } = require('node:http');
// // now we can not use require  becasuse type =module
// import { http } from 'http';//wrong
// import { createServer } from 'http';  // Correct import for createServer
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> hello world</h1>');
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
