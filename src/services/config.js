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

import nconf from 'nconf';
import path from 'path';
import nconfYaml from 'nconf-yaml';

const DEFAULT_CONFIG_FILE = path.resolve(__dirname, '../../config/config.yml');

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
export function get(keyPath) {
  return config.get(keyPath);
};
