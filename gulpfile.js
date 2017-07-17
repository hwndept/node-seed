const babel = require('gulp-babel');
const babelRegister = require('babel/register');
const eslint = require('gulp-eslint');
const gulp = require('gulp-help')(require('gulp'));
const isparta = require('isparta');
const istanbul = require('gulp-istanbul');
const jsdoc = require('gulp-jsdoc3');
const mergeStream = require('merge-stream');
const mocha = require('gulp-mocha');
const sequence = require('run-sequence');

const CONFIG_FILES = ['config/*.*'];
const GULP_FILE = ['gulpfile.js'];
const SRC_FILES = ['src/**/*.js'];
const TEST_FILES = ['test/**/*.js'];
const TEST_CASE_FILES = ['test/**/*.test.js'];
const BUILD_DIR = '.build';
const BUILD_COVERAGE_REPORT_DIR = `${BUILD_DIR}/coverage`;
const BUILD_SRC_DIR = `${BUILD_DIR}/source/src`;
const BUILD_JSDOC_DIR = `${BUILD_DIR}/jsdoc`;
const BUILD_CONFIG_DIR = `${BUILD_DIR}/source/config`;

gulp.task('lint', 'Validates code with "eslint"', function (done) {
  gulp.src(GULP_FILE.concat(SRC_FILES, TEST_FILES))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
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
          dir: BUILD_COVERAGE_REPORT_DIR
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
  const stream = mergeStream();

  stream.add(
    gulp.src(SRC_FILES)
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(gulp.dest(BUILD_SRC_DIR))
  );

  stream.add(
    gulp.src(CONFIG_FILES)
      .pipe(gulp.dest(BUILD_CONFIG_DIR))
  );

  stream.on('finish', done);
});

gulp.task('jsdoc', 'Generates jsdoc', function (done) {
  gulp.src(SRC_FILES, {read: false})
    .pipe(jsdoc({
      opts: {destination: BUILD_JSDOC_DIR},
      templates: {
        theme: 'cerulean'
      }
    }, done));
});

gulp.task('build', 'Builds source code: validates it and provides an artifacts', function (done) {
  sequence('lint', 'test', 'compile', 'jsdoc', done);
});

gulp.task('pre-commit', 'Being run automatically on a git pre-commit hook', ['build']);

gulp.task('ci', 'Being run on a CI', ['build']);

gulp.task('default', ['build']);
