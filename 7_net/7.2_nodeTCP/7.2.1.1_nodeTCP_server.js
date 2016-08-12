var net = require('net');

var server = net.createServer(function (socket) {
  //新的链接
  socket.on('data', function (data) {
    socket.write('ni hao ');
  });

  socket.on('end', function () {
    console.log('duan kai lian jie');
  });
  socket.write('huan ying guang lin <<shen ru qian chu Node.js>> shi li: \n');
});

server.listen(8124, function () {
  console.log('server bound');
});
