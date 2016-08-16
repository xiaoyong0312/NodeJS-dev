var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});

  response.write('<head>');
  response.write('<title>NodeJS-dev helloworld2</title>');
  response.write('<meta charset="utf-8"/>');
  response.write('</head>');

  response.write('<h1>Hello World! This is helloworld2.js!</h1>');
  response.end();
}).listen(3000);
console.log('hello world2 !!!');
