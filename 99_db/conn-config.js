/**
 * database 连接信息；
 */

'use strict';

/*var ConnConfig = function () {};
module.exports = ConnConfig;*/

var ConnConfig = module.exports = {};

/**
 * 连接mysql;
 * @returns {{host: string, port: number, user: string, password: string, database: string}}
 */
ConnConfig.mySqlConnConfig = function () {

  return {
    host: '172.21.4.155',
    port: 3306,
    user: 'ehome',
    password: 'root',
    database: 'ehomedb'
  };
}
