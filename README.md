# node-seed

This project is a skeleton for a typical NodeJS application.

The idea is to group useful tools and good practices for every application is being developed in node.

[![build][travis-image]][travis-url]
[![codeclimate][codeclimate-image]][codeclimate-url]
[![test coverage][codeclimate-coverage-image]][codeclimate-coverage-url]
[![npm version][npm-version]][npm-version-url]
[![npm dependencies][npm-dependencies]][npm-dependencies-url]
[![npm dev dependencies][npm-dev-dependencies]][npm-dev-dependencies-url]


## What are included

- Code linter - [jshint](http://jshint.com/);
- Code style checker - [jscs](http://jscs.info/);
- Test runner - [mocha](http://mochajs.org/);
- Test coverage checker - [istanbul](https://github.com/gotwarlost/istanbul);
- Task manager - [gulp](http://gulpjs.com/);
- Pre-commit hook;
- JsDoc generation;
- Codeclimate integration;
- TravisCI integation;

## Linting

```bash
gulp jshint
```

Code that will be validated:

- all **\*.js** files in **src** folder
- all **\*.js** files in **test** folder
- **gulpfile.js**

## Checking code style

```bash
gulp jscs
```

Code that will be validated:

- all **\*.js** files in **src** folder
- all **\*.js** files in **test** folder
- **gulpfile.js**

## Running tests and generating code coverage report

```bash
gulp test
```

Test cases stored in files **test/\*\*/\*.test.js** will be run only

Coverage reports will be generated and stored in folder **build/coverage**

## Generating jsdoc

```bash
gulp jsdoc
```

Documentation will be generated for **\*.js** files from **src** folder and stored in folder **build/jsdoc**

## Running all tasks

```bash
gulp
# or
gulp build
```

## Pre-commit hook

This hook is invoked by **git commit**, and can be bypassed with **--no-verify** option.

The task **gulp build** will be run automatically.

## Directory Layout

```
  build/                  --> build results
    coverage              --> code coverage reports
    jsdoc                 --> documentation generated for source code
  src/                    --> source files for the application
    hello.js              --> added just for an example
  test/                   --> test files for the application
    .jshintrc             --> configuration file for jshint; these rules will 
                              be applied for files in this folder only;
                              created because test cases contain global functions
                              which exports by mocha(describe, it,beforeEach, etc)
    hello.test.js         --> added just for an example
  .jscsrc                 --> configuration file for jscs
  .jshintrc               --> configuration file for jshint
  .travis.yml             --> configuration file for travis-ci
  gulpfile.js             --> list of all gulp tasks
```

[travis-image]: https://travis-ci.org/hwndept/node-seed.svg?branch=master
[travis-url]: https://travis-ci.org/hwndept/node-seed
[codeclimate-image]: https://codeclimate.com/github/hwndept/node-seed/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/hwndept/node-seed
[codeclimate-coverage-image]: https://codeclimate.com/github/hwndept/node-seed/badges/coverage.svg
[codeclimate-coverage-url]: https://codeclimate.com/github/hwndept/node-seed/coverage
[npm-version]: https://img.shields.io/npm/v/node-seed.svg
[npm-version-url]: https://www.npmjs.com/package/node-seed
[npm-dependencies]: https://david-dm.org/hwndept/node-seed/status.svg
[npm-dependencies-url]: https://david-dm.org/hwndept/node-seed
[npm-dev-dependencies]: https://david-dm.org/hwndept/node-seed/dev-status.svg
[npm-dev-dependencies-url]: https://david-dm.org/hwndept/node-seed#info=devDependencies&view=table
