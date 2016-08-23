/**
 * createConnection + json 配置文件 方式 连接mysql;
 */

'use strict';
var mySql = require('mysql');
var fsExtra = require('fs-extra');
var path = require('path');

//var mySqlConnConfig = fsExtra.readFileSync(path.join(__dirname, connConfigName));
//console.log('mySqlConnConfig-->>' + mySqlConnConfig);

var mySqlConnConfig = fsExtra.readJsonSync(path.join(__dirname, 'conn-config.json'));

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
