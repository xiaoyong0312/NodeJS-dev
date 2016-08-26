'use strict';
const child_process = require('child_process');
var serverIndex = `http://localhost:`;

/**
 * @desc 通过新建一个node的子进程,自动打开 启动好的 node 服务;
 */
var AutoOpenServerIndexPage = module.exports = {};

AutoOpenServerIndexPage.openBrowser = (_port)=> {
  console.log('_port-->> ' + _port);
  serverIndex = `${serverIndex}${_port}/`;

  if (_port == '' || _port == 'undefined') {
    //_port = `3000`;
    console.log(`Err, default open, your port is null...`);
  } else {
    var workerProcess = child_process.spawn('open', [serverIndex]);

    console.log(`Hi, success open ${serverIndex} in browser...`);
  }

}
