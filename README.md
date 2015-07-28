# node-seed

This project is a skeleton for a typical NodeJS application.

The idea is to group useful tools and good practices for every application is being developed in node.

## What are included

- Code linter - [jshint](http://jshint.com/);
- Code style checker - [jscs](http://jscs.info/);
- Test runner - [mocha](http://mochajs.org/);
- Test coverage checker - [istanbul](https://github.com/gotwarlost/istanbul);
- Task manager - [gulp](http://gulpjs.com/);
- Pre-commit hook;

## Linting

```bash
gulp jshint
```

## Checking code style

```bash
gulp jscs
```

## Running tests and generating code coverage report

```bash
gulp test
```

Coverage reports will be generated and stored in folder **build/coverage**

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
  build/                  --> build results: coverage report
  src/                    --> source files for the application
  test/                   --> test files for the application
  .jscsrc                 --> configuration file for jscs
  .jshintrc               --> configuration file for jshint
  gulpfile.js             --> list of all gulp tasks
```