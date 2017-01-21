// const webpack = require('webpack');

// exports.extractCSS = (paths) => {
//   return {
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           include: paths,
//           loader: ExtractTextPlugin.extract({
//             fallbackLoader: 'style-loader',
//             loaders: ['style-loader', 'css-loader', 'sass-loader']
//           })
//         },
//       ]
//     },
//     plugins: [
//       new ExtractTextPlugin('app.css'),
//     ]
//   };
// };