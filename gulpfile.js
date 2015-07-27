var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var GULP_FILE = ['gulpfile.js'];
var SRC_FILES = ['src/**/*.js'];
var TEST_FILES = ['test/**/*.js'];

gulp.task('jshint', function () {
  return gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter("fail"));
});

gulp.task('jscs', function () {
  return gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jscs());
});

gulp.task('default', ['jshint', 'jscs']);