const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackValidator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

module.exports = env =>  {
  const {ifProd, ifNotProd} = getIfUtils(env)
  const extractCSS = new ExtractTextPlugin(ifProd('css/bundle.[name].[hash].css', 'css/bundle.[name].css'))
  
  let config = webpackValidator({
    context: resolve('src/app'),
    devtool: ifProd('cheap-module-source-map', 'eval'),
    entry: {
      app: [
        './js/app.js', 
      ],
      vendor: ['react']
    },
    output: {
      filename: ifProd('js/bundle.[name].[hash].js', 'js/bundle.[name].js'),
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
        inject: 'body'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd(JSON.stringify('production'), JSON.stringify('development'))
        }
      })
    ])
  });

  if(env.prod) {
    config.entry.vendor.push('./scss/app.scss')
  } else {
    config.entry.app.push('./scss/app.scss')
  }

  return config
}
