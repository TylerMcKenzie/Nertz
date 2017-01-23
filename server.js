'use strict';

const env = require('yargs').argv.env;
const { resolve } = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.babel.js')(env);

const isDev = env !== 'prod';

const HOSTNAME = 'localhost';
const PORT = isDev ? 3000 : 3000;


// Start server logic
var app = express();

if (isDev) {
  
  const compiler = webpack(webpackConfig);
  const compilerOptions = {
    publicPath: webpackConfig.output.publicPath,
    stats: { 
      colors: true
    }
  };


  app.use(webpackMiddleware(compiler, compilerOptions));
  app.use(webpackHotMiddleware(compiler));

  app.get('/*', (err, res, req) => {
    res.sendFile(__dirname + '/index.html');
  })

} else {

  app.use(express.static(__dirname));
  app.get('/*', (err ,res, req) => {
    res.sendFile(__dirname + '/index.html');
  })

}

app.listen(PORT);

// const server = http.createServer((req, res) => {
//   // serve up just index page as React will handle routing **maybe**

//   // determine file path
//   var filePath = '.' + req.url;
//   if (filePath == './')
//     filePath = './index.html'

//   // serve up content in correct context
//   var contentType = 'text/html';
//   var extName = path.extname(filePath);
  
//   switch(extName) {
//     case '.js':
//       contentType = 'text/javascript';
//       break;
//     case '.css':
//       contentType = 'text/css';
//       break;
//     case '.json':
//       contentType = 'application/json';
//       break;
//     case '.png':
//       contentType = 'image/png';
//       break;      
//     case '.jpg':
//       contentType = 'image/jpg';
//       break;
//     case '.wav':
//       contentType = 'audio/wav';
//       break;
//   }

//   // serve assets on request
//   fs.readFile(filePath, (err, content) => {
//     if (err)
//       console.log(err);
//     else
//       res.writeHeader(200, {'Content-Type': contentType});
//       res.end(content, 'utf-8');
//   });
// });

// server.listen(port, hostname, () => {
//   console.log("this worked, first try!");
// })