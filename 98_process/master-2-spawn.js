'use strict';
const fs = require('fs');
const child_process = require('child_process');
var exampleJS = `${__dirname}/support.js`;

for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.spawn('node', [exampleJS, i]);

  workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  workerProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  workerProcess.on('close', function (code) {
    //console.log('子进程已退出，退出码 ' + code);
    console.log('child process quit, code-->>' + code);
  });
}
