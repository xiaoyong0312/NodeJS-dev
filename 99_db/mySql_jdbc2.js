/**
 * createPool event 方式 连接mysql;
 */

'use strict';
var mySql = require('mysql');

const connConfig = {
  //mySql 连接信息；
  host: '172.21.4.155',
  port: 3306,
  user: 'ehome',
  password: 'root',
  database: 'ehomedb'
}

var pool = mySql.createPool(connConfig);

pool.on('connection', (connection)=> {
  //connection.query('SET SESSION auto_increment_increment=1');
  connection.query('SELECT * from tb_sub_aunt', (err, values)=> {
    if (err) throw err;
    console.log('values[0]:' + values[0]);
    console.log('\n');
  });

  connection.destroy();
});

pool.on('enqueue', ()=> {
  console.log('Waiting for available connection slot');
});

pool.end((err)=> {
  // all connections in the pool have ended
});
