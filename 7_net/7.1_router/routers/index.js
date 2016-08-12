function Index() {
  this.exec = function (route, req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('This is </b><strong>Home Page</strong></b>');
  }
}

module.exports = new Index();