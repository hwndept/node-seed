'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var jsdoc = require('gulp-jsdoc');
var sequence = require('run-sequence');

var GULP_FILE = ['gulpfile.js'];
var SRC_FILES = ['src/**/*.js'];
var TEST_FILES = ['test/**/*.js'];
var TEST_CASE_FILES = ['test/**/*.test.js'];
var COVERAGE_REPORT_DIR = 'build/coverage';
var JSDOC_DIR = 'build/jsdoc';

gulp.task('jshint', function (done) {
  gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .on('finish', done);
});

gulp.task('jscs', function (done) {
  gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jscs())
    .on('finish', done);
});

gulp.task('test', function (done) {
  gulp.src(SRC_FILES)
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
        }))
        .on('finish', done);
    });
});

gulp.task('jsdoc', function (done) {
  gulp.src(SRC_FILES)
    .pipe(jsdoc(JSDOC_DIR))
    .on('finish', done);
});

gulp.task('build', function (done) {
  sequence('jshint', 'jscs', 'test', 'jsdoc', done);
});

gulp.task('pre-commit', ['build']);

gulp.task('ci', ['build']);

gulp.task('default', ['build']);
