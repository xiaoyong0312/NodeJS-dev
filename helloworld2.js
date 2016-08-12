var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Tye": "text/html;charset:utf-8"
  });
  res.write('<head><meta charset="utf-8"/></head>');
  res.write('hello world2!!!');
  res.end();
}).listen(3000);
console.log('hello world2!!!');