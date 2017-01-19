var webpack = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin');

var webpackConfiguation = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new htmlPlugin({
      template: 'index.html'
    })
  ]

};

module.exports = webpackConfiguation;