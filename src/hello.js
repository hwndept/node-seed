/**
 * @module src/hello
 */

import util from 'util';

/**
 * Gets greeting message in format "Hello, %s"
 *
 * @param {string} [name=world] Name to insert
 *
 * @return {string} Greeting message
 *
 * @example
 *
 *  import hello from 'src/hello';
 *
 *  hello('username'); // 'Hello, username'
 */
export default function hello(name) {
  name = name || 'world';

  return util.format('Hello, %s!', name);
}
