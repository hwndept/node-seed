'use strict';

var gulp = require('gulp-help')(require('gulp'));
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var jsdoc = require('gulp-jsdoc3');
var sequence = require('run-sequence');
var babel = require('gulp-babel');
var isparta = require('isparta');
var babelRegister = require('babel/register');

var GULP_FILE = ['gulpfile.js'];
var SRC_FILES = ['src/**/*.js'];
var TEST_FILES = ['test/**/*.js'];
var TEST_CASE_FILES = ['test/**/*.test.js'];
var COVERAGE_REPORT_DIR = 'build/coverage';
var COMPILED_SRC_DIR = 'build/source';
var JSDOC_DIR = 'build/jsdoc';

gulp.task('jshint', 'Validates code with "jshint"', function (done) {
  gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .on('finish', done);
});

gulp.task('jscs', 'Validates code style with "jscs"', function (done) {
  gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(jscs())
    .on('finish', done);
});

gulp.task('test', 'Runs tests and generates code coverage report', function (done) {
  gulp.src(SRC_FILES)
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      gulp.src(TEST_CASE_FILES)
        .pipe(mocha({compilers: {js: babelRegister}}))
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

gulp.task('compile', 'Compiles source code from es6 to es5', function (done) {
  gulp.src(SRC_FILES)
    .pipe(babel())
    .pipe(gulp.dest(COMPILED_SRC_DIR))
    .on('finish', done);
});

gulp.task('jsdoc', 'Generates jsdoc', ['compile'], function (done) {
  gulp.src(SRC_FILES, {read: false})
    .pipe(jsdoc({
      opts: {destination: JSDOC_DIR},
      templates: {
        theme: 'cerulean'
      }
    }, done));
});

gulp.task('build', 'Builds source code: validates it and provides an artifacts', function (done) {
  sequence('jshint', 'jscs', 'test', 'compile', 'jsdoc', done);
});

gulp.task('pre-commit', 'Be run automatically on a git pre-commit hook', ['build']);

gulp.task('ci', 'Be run on a CI', ['build']);

gulp.task('default', ['build']);
