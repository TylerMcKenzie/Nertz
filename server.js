'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const express = require('express');
const proxy = require('proxy-middleware');
const url = require('url');

const HOSTNAME = 'localhost';
const APPPORT = Number(process.env.PORT || 3000);
const PROXYPORT = 3001;

// Run dev server for hot reload of assets
var serveConfig = Object.create(webpackConfig);
serveConfig.devtool = 'eval';
serveConfig.debug = true;
// serveConfig.entry.app.unshift("webpack-dev-server/client?http://"+HOSTNAME+":"+PROXYPORT+"/", "webpack/hot/dev-server");

var server = new WebpackDevServer(webpack(serveConfig), {
  hot: true,
  publicPath: '/dist',
  stats: {
    colors: true
  }
});

// Start app
var app = express();

// serve dist
app.use('/dist', proxy(url.parse('http://' + HOSTNAME + ':'+ PROXYPORT + '/dist')));

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// run servers
server.listen(PROXYPORT, HOSTNAME, ()=> {});
app.listen(APPPORT);

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