/**
 * Stores all project configuration. Configuration sources are:
 * - config/config.yaml;
 * - environment variables;
 * - command line arguments.
 *
 * To override property via env variable or via cli argument require to replace
 * "." to "_" in it's path and pass it accordingly, for example passing
 * db_host=test will override configuration property db.test.
 * 
 * @module src/services/config
 */

const nconf = require('nconf');
const path = require('path');
const nconfYaml = require('nconf-yaml');

const DEFAULT_CONFIG_FILE = path.resolve(__dirname, '../../config/config.yaml');

const config = nconf
  .argv()
  .env()
  .file({ file: DEFAULT_CONFIG_FILE, format: nconfYaml });

/**
 * Retrieves configuration property value.
 *
 * @param {string} keyPath Configuration property path, e.g. db.host
 * 
 * @return {*} Value strored by given path
 */
exports.get = (keyPath) => {
  return config.get(keyPath);
};
