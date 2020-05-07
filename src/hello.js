/**
 * @module src/hello
 */

const util = require('util');

/**
 * Gets greeting message in format "Hello, %s"
 *
 * @param {string} [name=world] Name to insert
 *
 * @return {string} Greeting message
 *
 * @example
 *
 *  const hello = require('src/hello');
 *
 *  hello('username'); // 'Hello, username'
 */
module.exports = (name) => {
  name = name || 'world';

  return util.format('Hello, %s!', name);
};
