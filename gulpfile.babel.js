var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var browser = require('browser-sync').create();

// build js dist 
gulp.task('js', function () {
  return gulp.src('src/js/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
});

// reload browser 
gulp.task('js-watch', ['js'], function(done) { 
  browser.reload();
  done();
})

// build css from scss to dist
gulp.task('scss', function () {
  return gulp.src('src/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('dist/css'))
         .pipe(browser.stream());
});

gulp.task('serve', ['js', 'scss'], function () {
  
  // initialize dev server
  browser.init({
    server: './'
  });

  // watch js and issue js-watch task
  gulp.watch("src/js/*.js", ['js-watch']);
  
  // watch all html and reload browser
  gulp.watch("*.html").on('change', browser.reload);
});

gulp.task('default', ['serve'])