const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackValidator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')


module.exports = env =>  {
  const {ifProd, ifNotProd} = getIfUtils(env)
  const extractCSS = new ExtractTextPlugin(ifProd('css/bundle.[name].[chunkhash].css', 'css/bundle.[name].css'))

  const config = webpackValidator({
    context: resolve('src/app'),
    devtool: ifProd('source-map', 'eval'),
    target: 'web',
    entry: {
      app: [
        './js/app.js',  
      ],
      vendor: ['./scss/app.scss', 'react']
    }
    ,
    output: {
      filename: ifProd('js/bundle.[name].[chunkhash].js', 'js/bundle.[name].js'),
      path: resolve('dist'),
      publicPath: '/',
      pathinfo: ifNotProd(),
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
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: './layouts/index.html',
        inject: 'head'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      }),
      extractCSS,
      ifProd(
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        })
      ),
      ifNotProd(
        new webpack.HotModuleReplacementPlugin()
      )
    ])
  });

  return config
}