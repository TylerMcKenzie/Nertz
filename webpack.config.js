var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var htmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('./css/app.css');

var webpackConfiguation = {
  context: __dirname,
  target: 'web',
  entry: { app: [
    './src/app/js/app.js',
    './src/app/scss/app.scss',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3001']
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: 'http://localhost:3001/dist/',
    filename: 'js/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css' ,'sass'])
      }
    ]
  },
  devServer: { inline: true },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    extractCSS,
    new webpack.HotModuleReplacementPlugin()
  ]

};

module.exports = webpackConfiguation;