const webpack = require('webpack');
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackValidator = require('webpack-validator');

const extractCSS = new ExtractTextPlugin('./css/app.css');

module.exports = env =>  {
  const config = webpackValidator({
    context: resolve('src/app'),
    devtool: env.prod ? 'source-map' : 'eval',
    target: 'web',
    entry:  [
      'webpack-hot-middleware/client?reload=true',
      './js/app.js',
      './scss/app.scss',
      ]
    ,
    output: {
      filename: 'js/app.js',
      path: resolve('dist'),
      publicPath: '/dist/',
      pathinfo: env.prod ? true : false,
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          loader: extractCSS.extract(['css' ,'sass'])
        }
      ]
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
      extractCSS,
      new webpack.HotModuleReplacementPlugin(),
    ]
  });

  return config;
};

