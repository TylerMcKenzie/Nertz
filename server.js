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
const PORT = isDev ? 3000 : 3000;


// Start server logic
var app = express();

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

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('/*', (err, res, req) => {
    res.write(middleware.fileSystem.readFileSync(join(__dirname, 'dist/index.html')));
    res.end();
  })

} else {

  app.use(express.static(join(__dirname, 'dist')));
  app.get('/*', (err ,res, req) => {
    res.sendFile(join(__dirname, 'dist/index.html'));
  })

}

app.listen(PORT);
