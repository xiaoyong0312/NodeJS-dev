var http = require("http");
var port = 3000;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});

  res.write('<head>');
  res.write('<title>NodeJS-dev nodeServer</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('</head>');

  response.write(`<h1>this is nodeServer.js, port ${port}</h1>`);
  response.end();
}).listen(port);
console.log(`nodeServer running at http://localhost:${port}/`);
