var http = require("http");
http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});

  res.write('<head>');
  res.write('<title>NodeJS-dev helloworld</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('<link href="/images/NodeJS-dev-index-1.1.ico" rel="icon" type="image/x-icon"/>');
  res.write('</head>');

  res.write('<h1>Hello World! This is helloworld.js!</h1>');
  res.write('<b></b>');
  res.end();
}).listen(3000);
console.log("Server running at http://localhost:3000/");
