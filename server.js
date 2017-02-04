'use strict';

const env = require('yargs').argv.env;
const { resolve, join } = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.babel.js')(env);

const isDev = env !== 'prod';

const HOSTNAME = 'localhost';
const PORT = isDev ? 3000 : 3001;


// Start server logic
var server = express();

if (isDev) {
  let devConfig = webpackConfig
  devConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true')

  const compiler = webpack(devConfig);
  const compilerOptions = {
    publicPath: webpackConfig.output.publicPath,
    stats: { 
      colors: true
    }
  };

  const middleware = webpackMiddleware(compiler, compilerOptions);

  server.use(middleware);
  server.use(webpackHotMiddleware(compiler));

  server.get('/*', (err, res, req) => {
    res.write(middleware.fileSystem.readFileSync(join(__dirname, 'dist/index.html')));
    res.end();
  })

} else {

  server.use(express.static(join(__dirname, 'dist')));
  server.get('/*', (err ,res, req) => {
    res.sendFile(join(__dirname, 'dist/index.html'));
  })

}

server.listen(PORT);
