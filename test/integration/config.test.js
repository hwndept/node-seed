const assert = require('assert');
const {get} = require('../../src/services/config');

describe('config.js', () => {
  it('should be possible to retrieve value', () => {
    assert.equal(get('name'), 'node-seed');
  });
});
