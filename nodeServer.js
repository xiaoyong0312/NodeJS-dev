var http = require("http");
var port = 3000;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});

  response.write('<head>');
  response.write('<title>NodeJS-dev nodeServer</title>');
  response.write('<meta charset="utf-8"/>');
  response.write('</head>');

  response.write(`<h1>this is nodeServer.js index page, port ${port}</h1>`);
  response.end();
}).listen(port);
console.log(`nodeServer running at http://localhost:${port}/`);

console.log(`open http://localhost:${port}/ in browser ...`);

//window.location.replace(`http://localhost:${port}/`);
