const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = Number(process.env.port || 3000);

const server = http.createServer((req, res) => {
  // serve up just index page as React will handle routing **maybe**

  // determine file path
  var filePath = '.' + req.url;
  if (filePath == './')
    filePath = './index.html'

  // serve up content in correct context
  var contentType = 'text/html';
  var extName = path.extname(filePath);
  
  switch(extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;      
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
  }

  // serve assets on request
  fs.readFile(filePath, (err, content) => {
    if (err)
      console.log(err);
    else
      res.writeHeader(200, {'Content-Type': contentType});
      res.end(content, 'utf-8');
  });
});

server.listen(port, hostname, () => {
  console.log("this worked, first try!");
})