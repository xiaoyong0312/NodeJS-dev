var http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});
  response.write("Hello World! This is helloworld.js!");
  response.write('<head>' +
    '<title>NodeJS-dev</title>' +
    '<meta charset="utf-8"/>' +
    '<link href="/images/NodeJS-dev-index-1.1.ico" rel="icon" type="image/x-icon"/>' +
    '</head>');
  response.write('<h1></h1>');
  response.write('<b></b>');
  response.end();
}).listen(3000);
console.log("Server running at http://localhost:3000/");

