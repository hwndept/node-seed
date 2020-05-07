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

- Code linter - [eslint][eslint-url];
- Test runner - [jest][jest-url];
- Test coverage checker - [jest][jest-url];
- Pre-commit hook;
- JsDoc generation - [jsdoc][jsdoc-url];
- GitHub actions as CI;
- Editor Config [editorconfig][editor-config-url];

## Linting

```bash
npm run lint
```

Code that will be validated:

- all **\*.js** files in **src** folder
- all **\*.js** files in **test** folder
- **gulpfile.js**

## Running tests and generating code coverage report

```bash
npm run tests
```

Test cases stored in files **test/\*\*/\*.test.js** will be run only

Coverage reports will be generated and stored in folder **.build/coverage**

## Generating jsdoc

```bash
npm run jsdoc
```

Documentation will be generated for **\*.js** files from **src** folder and stored in folder **.build/jsdoc**

## Running all tasks

```bash
npm test
```

## Pre-commit hook

This hook is invoked by **git commit**, and can be bypassed with **--no-verify** option.

## Directory Layout

```
  .build/                  --> build results
    coverage              --> code coverage reports
    jsdoc                 --> documentation generated for source code
  config/
    confih.yaml           --> application configuration file
  src/                    --> source files for the application
    services/
      config.js           --> configuration module
    hello.js              --> added just for an example
  test/                   --> test files for the application
    integration/          --> integration tests
    unit/                 --> unit tests
    .eslintrc.yaml        --> configuration file for eslint; these rules
                              will be applied for files in this folder
                              only; created because test cases contain
                              global functions which exports by
                              mocha(describe, it, beforeEach, etc)
  .editorconfig           --> configuration file for code editors to keep style
  .eslintrc.yaml          --> configuration file for eslint
```

[project-npm-dependencies]: https://david-dm.org/hwndept/node-seed/status.svg
[project-npm-dependencies-url]: https://david-dm.org/hwndept/node-seed
[project-npm-dev-dependencies]: https://david-dm.org/hwndept/node-seed/dev-status.svg
[project-npm-dev-dependencies-url]: https://david-dm.org/hwndept/node-seed#info=devDependencies&view=table
[eslint-url]: http://eslint.org
[jest-url]: https://jestjs.io/
[jsdoc-url]: http://usejsdoc.org/
[editor-config-url]: http://editorconfig.org/
