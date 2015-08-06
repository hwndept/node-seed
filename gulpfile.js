'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var jsdoc = require('gulp-jsdoc');

var GULP_FILE = ['gulpfile.js'];
var SRC_FILES = ['src/**/*.js'];
var TEST_FILES = ['test/**/*.js'];
var TEST_CASE_FILES = ['test/**/*.test.js'];
var COVERAGE_REPORT_DIR = 'build/coverage';
var JSDOC_DIR = 'build/jsdoc';

gulp.task('jshint', function () {
  return gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', function () {
  return gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jscs());
});

gulp.task('test', function () {
  return gulp.src(SRC_FILES)
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(TEST_CASE_FILES)
        .pipe(mocha())
        .pipe(istanbul.writeReports({
          dir: COVERAGE_REPORT_DIR
        }))
        .pipe(istanbul.enforceThresholds({
          thresholds: {
            global: 100
          }
        }));
    });
});

gulp.task('jsdoc', function () {
  return gulp.src(SRC_FILES)
    .pipe(jsdoc(JSDOC_DIR));
});

gulp.task('build', ['jshint', 'jscs', 'test', 'jsdoc']);

gulp.task('pre-commit', ['build']);

gulp.task('ci', ['build']);

gulp.task('default', ['build']);
