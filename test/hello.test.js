'use strict';

var assert = require('assert');
var hello = require('../src/hello');

describe('hello.js', function () {
  it('it should return "Hello, world!" when name is empty', function () {
    assert.equal('Hello, world!', hello());
  });

  it('it should pass the name when it is passed', function () {
    assert.equal('Hello, username!', hello('username'));
  });
});
