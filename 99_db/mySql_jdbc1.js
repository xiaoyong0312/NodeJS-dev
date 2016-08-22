/**
 * createPool 方式 连接mysql;
 */

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

pool.getConnection((err, connection)=> {

  connection.query('SELECT * from tb_sub_aunt', (err, rows)=> {
    if (err) throw err;
    //console.log('rows is: ', rows);
    console.log('rows[0] is: ', rows[0]);
    //console.log('rows[1] is: ', rows[1]);
  });

  connection.release();

  //connection.destroy();
});

//pool.end();
