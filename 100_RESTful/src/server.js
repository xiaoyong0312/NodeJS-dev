var express = require('express');
var app = express();
var fs = require("fs");
//import Immutable from 'immutable';
var Immutable = require("immutable");

var server = app.listen(3010, function () {
  /*var host = server.address().address;
   var port = server.address().port;
   console.log("应用实例，访问地址为 http://" + host + port);*/

  console.log('server.address()-->>' + Immutable.fromJS(server.address()));
  var address = Immutable.fromJS(server.address());
  console.log("http://" + address.get('address') + address.get('port'));
});

//---//服务主页 http://127.0.0.1:3010/ 如果要返回完整的页面(纯html/react),还需完善...
app.get('/', (req, res)=> {
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});

  res.write('<head>');
  res.write('<title>NodeJS-dev 100_RESTful</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('<link href="../../images/NodeJS-dev-index-1.1.ico" rel="icon" type="image/x-icon"/>');
  res.write('</head>');

  res.write('<h1>this is 100_RESTful index page...</h1>');
  res.end();
});

//---//获取用户列表 http://127.0.0.1:3010/listUsers
app.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    /*console.log('data-->\n' + data);
     res.end(data);*/

    console.log('typeof data-->>' + typeof data);

    res.writeHead(200, {"Content-Type": "application/json;charset:utf-8"});
    res.write(data);
    res.end();
  });
})

//---//添加用户 http://127.0.0.1:3010/addUser
//添加的新用户数据
var user = {
  "user4": {
    "name": "Dubble",
    "password": "Dubble",
    "profession": "No.4",
    "id": 4
  }
}

app.get('/addUser', function (req, res) {
  // 读取已存在的数据
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];

    console.log('typeof data-->>' + typeof data);
    console.log('data-->\n' + JSON.stringify(data));
    res.end(JSON.stringify(data));
  });
})

//---//显示用户详情 http://127.0.0.1:3010/getDetails/2
app.get('/getDetails/:id', function (req, res) {
  // 首先我们读取已存在的用户
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    var user = data["user" + req.params.id];
    console.log("user-->>\n" + JSON.stringify(user));
    res.end(JSON.stringify(user));
  });
})

//---//删除用户  http://127.0.0.1:3010/deleteUser/4
app.get('/deleteUser/:id', function (req, res) {
  // First read existing users.
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    delete data["user" + req.params.id];
    console.log('data-->\n' + JSON.stringify(data));
    res.end(JSON.stringify(data));
  });
})

