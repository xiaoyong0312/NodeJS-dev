'use strict';
var http = require('http');
var AutoOpenServerIndexPage = require('./utils/auto-open-server-index-page');
var port = 3001;
var serverIndex = `http://localhost:${port}/`;

/**
 * @desc http 的方式创建 nodejs 服务端;
 */
http.createServer((req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'});

  res.write('<head>');
  res.write('<title>NodeJS-dev nodeServer1</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('</head>');

  res.write(`<h1>this is nodeServer1.js index page, port ${port}</h1>`);
  res.end();
}).listen(port);
console.log(`nodeServer1 running at ${serverIndex}`);

console.log(`open ${serverIndex} in browser, please waiting seconds ...`);

AutoOpenServerIndexPage.openBrowser(port);
