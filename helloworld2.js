var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Tye": "text/html;charset:utf-8"});

  res.write('<head>');
  res.write('<title>NodeJS-dev helloworld2</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('</head>');

  res.write('<h1>Hello World! This is helloworld2.js!</h1>');
  res.end();
}).listen(3000);
console.log('hello world2!!!');
