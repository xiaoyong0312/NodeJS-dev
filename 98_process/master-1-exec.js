'use strict';
const fs = require('fs');
const child_process = require('child_process');
var exampleJS = `${__dirname}/support.js`;

for (var i = 0; i < 3; i++) {
  //var workerProcess = child_process.exec('node support.js' + i,
  //var workerProcess = child_process.exec('node ' + exampleJS,
  var workerProcess = child_process.exec(`node ${exampleJS}`, function (error, stdout, stderr) {
    //if (error) throw error;

    if (error) {
      console.log(error.stack);
      console.log('Error code: ' + error.code);
      console.log('Signal received: ' + error.signal);
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
  });

  workerProcess.on('exit', function (code) {
    //console.log('子进程已退出，退出码 ' + code);
    console.log('child process quit, code-->>' + code);
  });
}


