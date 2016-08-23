'use strict';
let mySql = require('mysql');

let conn = mySql.createConnection({
  //mySql 连接信息；
  host: '172.21.4.155',
  port: 3306,
  user: 'ehome',
  password: 'root',
  database: 'ehomedb'
});

conn.table('tb_sub_aunt').find(query).skip(0).limit(20)
  .then(list = > console.log('results', list)
).
catch(err = > console.log(err)
)

conn.table('xxxxx').update(query, update)
  .then(ret = > console.log(ret)
)
.
catch(err = > console.log(err)
)
