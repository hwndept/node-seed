'use strict';

/**
 * @module src/hello
 */

var util = require('util');

/**
 * Gets greeting message in format "Hello, %s"
 *
 * @param {string} [name=world] Name to insert
 *
 * @return {string} Greeting message
 *
 * @example
 *
 *  var hello = require('src/hello');
 *
 *  hello('username'); // 'Hello, username'
 */
module.exports = function hello(name) {
    name = name || 'world';

    return util.format('Hello, %s!', name);
};
