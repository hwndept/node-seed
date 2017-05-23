import assert from 'assert';
import {get} from '../../src/services/config';

describe('config.js', () => {
  it('should be possible to retrieve value', () => {
    assert.equal(get('name'), 'node-seed');
  });
});
