[![build][project-travis-ci-image]][project-travis-ci-url]
[![codeclimate][project-codeclimate-image]][project-codeclimate-url]
[![test coverage][project-codeclimate-coverage-image]][project-codeclimate-coverage-url]
[![npm version][project-npm-version]][project-npm-version-url]
[![npm dependencies][project-npm-dependencies]][project-npm-dependencies-url]
[![npm dev dependencies][project-npm-dev-dependencies]][project-npm-dev-dependencies-url]

# node-seed

This project is a skeleton for a typical NodeJS application.

The idea is to group useful tools and good practices for every application is being developed in node.

## How to use

1. Clone this repository: `git clone https://github.com/hwndept/node-seed`
2. Remove .git directory
3. Update package.json
  - set "name"
  - set "version"(0.0.0 by default)
  - set "description"
  - set "author"
  - set "license"
  - set right "keywords" or remove this section
  - set your "repository" or remove this section
  - set "bugs" or remove this section
  - set "homepage" or remove this section
4. Update README.md
5. Update .travis.yml to use Travis as CI or remove it.
  **repo_token** used in config is the codeclimate's token.
  Every build on travis will report code coverage value to codeclimate.

## What are included

- Code linter - [jshint][jshint-url]
- Code style checker - [jscs][jscs-url]
- Test runner - [mocha][mocha-url];
- Test coverage checker - [istanbul][istanbul-url];
- Task manager - [gulp][gulp-url];
- Pre-commit hook;
- JsDoc generation - [jsdoc][jsdoc-url];
- ES6 Support([ECMA-262, Edition 5][ecma-262-edition-5-url]) - [babel][babel-url];
- Codeclimate integration [codeclimate][codeclimate-url];
- TravisCI integration [travis-ci][travis-ci-url];
- Editor Config [editorconfig][editor-config-url];
- List all available tasks using `gulp help` command;

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

## Compiling code - ES6 Support

Since **nodejs** doesn't fully support all ES6 features source code should be compiled.

```bash
gulp compile
```

Source code in **src** folder will be compiled and stored in folder **build/source**

## Running all tasks

```bash
gulp
# or
gulp build
```

## Pre-commit hook

This hook is invoked by **git commit**, and can be bypassed with **--no-verify** option.

The task **gulp build** will be run automatically.

## Printing all available tasks and theirs arguments

```bash
gulp help
```

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
  .editorconfig           --> configuration file for code editors to keep style
  .jscsrc                 --> configuration file for jscs
  .jshintrc               --> configuration file for jshint
  .travis.yml             --> configuration file for travis-ci
  gulpfile.js             --> list of all gulp tasks
```

[project-travis-ci-image]: https://travis-ci.org/hwndept/node-seed.svg?branch=master
[project-travis-ci-url]: https://travis-ci.org/hwndept/node-seed
[project-codeclimate-image]: https://codeclimate.com/github/hwndept/node-seed/badges/gpa.svg
[project-codeclimate-url]: https://codeclimate.com/github/hwndept/node-seed
[project-codeclimate-coverage-image]: https://codeclimate.com/github/hwndept/node-seed/badges/coverage.svg
[project-codeclimate-coverage-url]: https://codeclimate.com/github/hwndept/node-seed/coverage
[project-npm-version]: https://img.shields.io/npm/v/node-seed.svg
[project-npm-version-url]: https://www.npmjs.com/package/node-seed
[project-npm-dependencies]: https://david-dm.org/hwndept/node-seed/status.svg
[project-npm-dependencies-url]: https://david-dm.org/hwndept/node-seed
[project-npm-dev-dependencies]: https://david-dm.org/hwndept/node-seed/dev-status.svg
[project-npm-dev-dependencies-url]: https://david-dm.org/hwndept/node-seed#info=devDependencies&view=table
[jshint-url]: http://jshint.com/
[jscs-url]: http://jscs.info/
[mocha-url]: http://mochajs.org/
[istanbul-url]: https://github.com/gotwarlost/istanbul/
[gulp-url]: http://gulpjs.com/
[jsdoc-url]: http://usejsdoc.org/
[ecma-262-edition-5-url]: http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
[babel-url]: https://babeljs.io/
[codeclimate-url]: https://codeclimate.com/
[travis-ci-url]: https://travis-ci.org/
[editor-config-url]: http://editorconfig.org/
