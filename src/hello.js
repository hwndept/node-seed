var util = require('util');

module.exports = function hello(name) {
    name = name || 'world';

    return util.format('Hello, %s!', name);
};
