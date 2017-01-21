'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';

const dirs = {
  src: 'src/app',
  dest: 'dist'
}

const PORT = 3001;
const HOSTNAME = 'localhost';

gulp.task('default', ['build-dev']);

gulp.task('build-dev', ['webpack:build-dev'], () => {
  gulp.watch([`${dirs.src}/**/*`], ['webpack:build-dev']);
});

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);

gulp.task('webpack:build-dev', (done) => {
  devCompiler.run((err, stats) => {
    if(err) 
      console.log(err);
    done();
  });
});

gulp.task('dev-server', ['build-dev'], () => {
  var serveConfig = Object.create(webpackConfig);
  serveConfig.devtool = 'eval';
  serveConfig.debug = true;
  serveConfig.entry.app.unshift("webpack-dev-server/client?http://"+HOSTNAME+":"+PORT+"/", "webpack/hot/dev-server");

  new WebpackDevServer(webpack(serveConfig), {
    hot: true,
    publicPath: '/' + serveConfig.output.publicPath,
    stats: {
      colors: true
    }
  })
  .listen(PORT, HOSTNAME, (err) => {
    if(err)
      console.log(err);
  });
});

// build js dist 
// gulp.task('js', function () {
//   return gulp.src(`${dirs.src}/js/**/*.js`)
//         .pipe(babel())
//         .pipe(gulp.dest('dist/js'));
// });

// reload browser on js build
// gulp.task('js-watch', ['js'], function(done) { 
//   browser.reload();
//   done();
// })

// build css from scss to dist
// gulp.task('scss', function () {
//   return gulp.src(`${dirs.src}/scss/*.scss`)
//          .pipe(sass())
//          .pipe(gulp.dest('dist/css'))
//          .pipe(browser.stream());
// });

// gulp.task('serve', ['js', 'scss'], function () {
  
//   // initialize dev server
//   browser.init({
//     server: './'
//   });

//   // watch js and issue js-watch task
//   gulp.watch(`${dirs.src}/js/**/*.js`, ['js-watch']);
  
//   // watch all html and reload browser
//   gulp.watch("*.html").on('change', browser.reload);
// });
