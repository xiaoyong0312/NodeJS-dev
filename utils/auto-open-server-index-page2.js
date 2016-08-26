'use strict';
let os = require('os');
const child_process = require('child_process');
let serverIndex = `http://localhost:`;

/**
 * 方法二: 输出 各个具体 的方法/function;
 * @desc 自动打开 启动好的 node 服务 index/other page;
 *
 * @type {{getOS: getOS, getCommandByOS: getCommandByOS, openBrowser: openBrowser}}
 */
module.exports = {
  getOS,
  getCommandByOS,
  openBrowser
};

/**
 * @desc 获取 系统类型;
 * @param osType
 * @returns {string}
 */
function getOS(osType) {
  let _osType = osType || os.type();
  let osTypeText = '';
  switch (_osType) {
    case 'Darwin':
      osTypeText = 'Mac';
      break;
    case 'Linux':
      osTypeText = 'Linux';
      break;
    case 'Windows_NT':
      osTypeText = 'Windows';
      break;
    default :
      osTypeText = '';
      break;
  }
  return osTypeText;
}

/**
 * @desc 不同的操作系统,用不同的 命令 打开浏览器;
 * Mac: open 'http://localhost:3000'
 * Linux: x-www-browser 'http://localhost:3000'
 * Windows: cmd /c start http://localhost:3000
 *
 * @param osType
 * @returns {string}
 */
function getCommandByOS(osType) {
  let _osType = osType || os.type();
  let osCommandText = '';
  switch (_osType) {
    case 'Darwin':
      osCommandText = 'open';
      break;
    case 'Linux':
      osCommandText = 'x-www-browser';
      break;
    case 'Windows_NT':
      osCommandText = 'cmd /c start';
      break;
    default :
      osCommandText = '';
      break;
  }
  return osCommandText;
}

console.log('getOS-->>' + getOS());
console.log('getCommandByOS-->>' + getCommandByOS());

/**
 * @desc 通过新建一个node的子进程,自动在浏览器中打开 启动好的 node 服务 主页/其他 页面;
 * @param _port
 */
function openBrowser(_port) {
  serverIndex = `${serverIndex}${_port}/`;
  if (_port == '' || _port == 'undefined') {
    console.log(`Err, default open, your port is null...`);
  } else {
    let workerProcess = child_process.spawn(`${getCommandByOS()}`, [serverIndex]);
    console.log(`Hi, success open ${serverIndex} in browser !`);
  }
}
