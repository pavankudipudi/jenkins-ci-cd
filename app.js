const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
  res.end(' i am wroking with vinay,nagendra and pavan!\n');
=======
  res.end(' i am wroking with vinay,nagendra and pavans !\n');
>>>>>>> 1a4879caa2744caba7763b173864d01f0a0f2889
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 
