'use strict';
let express = require('express');
let app = express();
let Immutable = require('immutable');
//import AutoOpenServerIndexPage2, { openBrowser } from './utils/auto-open-server-index-page2';
let AutoOpenServerIndexPage2 = require('./utils/auto-open-server-index-page2');
let openBrowser = AutoOpenServerIndexPage2.openBrowser;
let port = 3002;
//let port = process.env.PORT || 3002;
let serverIndex = `http://localhost:${port}/`;

/**
 * @desc express 的方式创建 nodejs 服务端;
 */
let server = app.listen(port, ()=> {
});
console.log('server.address()-->>' + Immutable.fromJS(server.address()));
let address = Immutable.fromJS(server.address());
console.log("http://" + address.get('address') + address.get('port'));

//---//服务主页 http://localhost:3002/ 如果要返回完整的页面(纯html/react),还需完善...
app.get('/', (req, res)=> {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'});

  res.write('<head>');
  res.write('<title>NodeJS-dev nodeServer2</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('<link href="./images/NodeJS-dev-index-1.1.ico" rel="icon" type="image/x-icon"/>');
  //res.write('<link href="http://pic.qianmi.com/astore/wei-store/images/bitbug_favicon64.ico" rel="icon" type="image/x-icon"/>');
  res.write('</head>');

  res.write(`<h1>this is nodeServer2.js index page, port ${address.get('port')} </h1>`);
  res.end();
});
console.log(`nodeServer2 running at ${serverIndex}`);

console.log(`open ${serverIndex} in browser, please waiting seconds ...`);

openBrowser(port);
