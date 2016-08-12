var http = require('http');
var router = require('./router');

router.addRoute('/', require('./routers/index'));
router.addRoute('/about', require('./routers/about'));
router.addRoute('/contact', require('./routers/contact'));

function onListened() {
  console.log('Node server starts at 3000.');
}

function onConnected(request, response) {
  router.handleRoute(request.url, request, response);
}

var server = http.createServer(onConnected);
server.listen(3000, onListened);