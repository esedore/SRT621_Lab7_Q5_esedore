const http = require('http');
const currentDate = new Date();
const strDate = currentDate.toString();
const hostname = '127.0.0.1';
const port = 8989;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(strDate);
  res.end('');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
