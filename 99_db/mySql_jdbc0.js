/**
 * createConnection 方式 连接mysql;
 */

var mySql = require('mysql');

//import ConnConfig, { mySqlConnConfig } from './conn-config';

//var ConnConfig = require('./conn-config');
var mySqlConnConfig = require('./conn-config').mySqlConnConfig();

var conn = mySql.createConnection(mySqlConnConfig);

conn.connect();

conn.query('SELECT * from tb_sub_aunt', (err, rows, fields)=> {
  if (err) throw err;
  //console.log('rows is: ', rows);
  console.log('rows[0] is: ', rows[0]);
  //console.log('rows[1] is: ', rows[1]);
  //console.log('fields is: ', fields);
  console.log('\n');
  console.warn('-->>');
  console.info('===>>>');
});

conn.end();
