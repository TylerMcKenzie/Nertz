const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = Number(process.env.port || 3000);

var html

const server = http.createServer((req, res) => {
  // serve up just index page as React will handle routing
  fs.readFile('./index.html', (err, html) => {
    if (err)
      console.log(err);
    else
      res.writeHeader(200, {'Content-Type': 'text/html'});
      res.write(html);
      res.end();
  });
});

server.listen(port, hostname, () => {
  console.log("this worked, first try!");
})