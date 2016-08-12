var net = require('net');

var server = net.createServer(function (c) { // 'conection' listenter
  console.log('client connected');
  c.on('end', function () {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});

server.listen(8124, function () { // 'listening' listenter
  console.log('server bound');
});