var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task("default", function () {
  var bundler = browserify('scripts/app.js');
  bundler.transform(babelify);

  bundler.bundle()
  .on('error', function (err) { console.error(err); })
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(gulp.dest('dist'));
});
