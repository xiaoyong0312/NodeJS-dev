'use strict';
const fs = require('fs');
const child_process = require('child_process');
var exampleJS = `${__dirname}/support.js`;

for (var i = 0; i < 3; i++) {
  var worker_process = child_process.fork(exampleJS, [i]);

  worker_process.on('close', function (code) {
    //console.log('子进程已退出，退出码 ' + code);
    console.log('child process quit, code-->>' + code);
  });
}


