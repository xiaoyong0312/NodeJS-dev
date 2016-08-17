var express = require('express');
var app = express();
var Immutable = require('Immutable');
var port = 3002;

/**
 * @desc express 的方式创建 nodejs 服务端;
 */
var server = app.listen(port, ()=> {
});
console.log('server.address()-->>' + Immutable.fromJS(server.address()));
var address = Immutable.fromJS(server.address());
console.log("http://" + address.get('address') + address.get('port'));

//---//服务主页 http://localhost:3002/ 如果要返回完整的页面(纯html/react),还需完善...
app.get('/', (req, res)=> {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'});

  res.write('<head>');
  res.write('<title>NodeJS-dev nodeServer2</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('</head>');

  res.write(`<h1>this is nodeServer2.js index page, port ${address.get('port')} </h1>`);
  res.end();
});
console.log('nodeServer2 running at http://localhost:${port}/');
