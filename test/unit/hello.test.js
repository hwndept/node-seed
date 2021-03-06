const assert = require('assert');
const hello = require('../../src/hello');

describe('hello.js', () => {
  it('it should return "Hello, world!" when name is empty', () => {
    assert.equal('Hello, world!', hello());
  });

  it('it should pass the name when it is passed', () => {
    assert.equal('Hello, username!', hello('username'));
  });
});
