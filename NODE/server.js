const http = require('http');
const Student = require('./student');

var me = new Student('Connor', 'Garber', 75000)

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end('<h1>Hello ' + me.firstName + '</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
