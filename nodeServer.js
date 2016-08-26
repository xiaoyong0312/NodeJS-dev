'use strict';
var http = require("http");
const child_process = require('child_process');
var port = 3000;
var serverIndex = `http://localhost:${port}/`;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});

  response.write('<head>');
  response.write('<title>NodeJS-dev nodeServer</title>');
  response.write('<meta charset="utf-8"/>');
  response.write('</head>');

  response.write(`<h1>this is nodeServer.js index page, port ${port}</h1>`);
  response.end();
}).listen(port);
console.log(`nodeServer running at ${serverIndex}`);

console.log(`open ${serverIndex} in browser, please waiting seconds ...`);

//child_process.spawn('open', [serverIndex]);
var workerProcess = child_process.spawn('open', [serverIndex]);
workerProcess.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

