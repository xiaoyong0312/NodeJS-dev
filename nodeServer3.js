'use strict';
let express = require('express');
let app = express();
let Immutable = require('immutable');
//import AutoOpenServerIndexPage2, { openBrowser } from './utils/auto-open-server-index-page2';

/*let AutoOpenServerIndexPage2 = require('./utils/auto-open-server-index-page2');
 let openBrowser = AutoOpenServerIndexPage2.openBrowser;*/

//var { openBrowser } = require('./utils/auto-open-server-index-page2');

let openBrowser = require('./utils/auto-open-server-index-page2').openBrowser;

let port = 3003;
let serverIndex = `http://localhost:${port}/`;

/**
 * @desc express 的方式创建 nodejs 服务端;
 */
let server = app.listen(port, ()=> {
});
console.log('server.address()-->>' + Immutable.fromJS(server.address()));
let address = Immutable.fromJS(server.address());
console.log("http://" + address.get('address') + address.get('port'));

//---//服务主页 http://localhost:3003/ 如果要返回完整的页面(纯html/react),还需完善...
app.get('/', (req, res)=> {

  console.log(`req-->>${req}`);
  console.log(`Immutable.fromJS(req)-->>${Immutable.fromJS(req)}`);

  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'});

  res.write('<head>');
  res.write('<title>NodeJS-dev nodeServer3</title>');
  res.write('<meta charset="utf-8"/>');
  res.write('<link href="images/NodeJS-dev-index-1.1.ico" rel="icon" type="image/x-icon"/>');
  //res.write('<link href="/opt/ideaWorkSpace/NodeJS-dev/images/NodeJS-dev-index-1.1.ico" rel="icon" type="image/x-icon"/>');
  //res.write('<link href="http://pic.qianmi.com/astore/wei-store/images/bitbug_favicon64.ico" rel="icon" type="image/x-icon"/>');
  res.write('</head>');

  res.write(`<h1>this is nodeServer3.js index page, port ${address.get('port')} </h1>`);
  res.end();
});
console.log(`nodeServer3 running at ${serverIndex}`);

console.log(`open ${serverIndex} in browser, please waiting seconds ...`);

openBrowser(port);

var page1 = 'index.html';
app.get('/index.html', (rep, res)=> {
  res.sendFile(`${__dirname}/${page1}`);

  console.log(`this is get method handle, then show ${page1} !`);
});


var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('NodeJS-dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'));

var page2 = 'upload.html';
app.get(`/${page2}`, (rep, res)=> {
  res.sendFile(`${__dirname}/${page2}`);

  console.log(`this is get method handle, then show ${page2} !`);
});

var FileUpLoadDownLoad = require('./common-modules/file-upload-download.js');
var ImageUpLoad = FileUpLoadDownLoad.ImageUpLoad;

app.post('/file_upload', function (req, res) {

  var _resultData = ImageUpLoad(req);
  console.log('nodeServer3.js _resultData-->>' + JSON.stringify(_resultData));

  res.write(`<h1>this is /file_upload get data from function ImageUpLoad ...</h1><br/>`);
  res.end(JSON.stringify(_resultData));


  /*var _resultData = {};

   console.log('req.files[0]-->>');
   console.log(req.files[0]);  // 上传的文件信息
   //console.log(`req.files[0]-->>\n ${req.files[0]}`);  // 上传的文件信息

   var des_file = __dirname + "/" + req.files[0].originalname;

   console.log(`read path req.files[0].path-->> ${req.files[0].path}`);
   console.log(`write path des_file-->> ${des_file}`);

   fs.readFile(req.files[0].path, function (err, data) {
   fs.writeFile(des_file, data, function (err) {
   if (err) {
   console.log(err);
   } else {
   _resultData = {
   message: 'File uploaded successfully',
   filename: req.files[0].originalname
   };
   }
   console.log('res-->>' + res);
   //console.log('data-->>' + data);
   console.log('_resultData-->>' + _resultData);
   console.log('JSON.stringify(_resultData)-->>' + JSON.stringify(_resultData));

   res.write(`<h1>this is /file_upload ...</h1><br/>`);
   //res.write(`${JSON.stringify(_resultData)}`);
   res.end(JSON.stringify(_resultData));
   //res.end();
   });
   });*/


});
