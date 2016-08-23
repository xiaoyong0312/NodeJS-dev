'use strict';

let path = require('path');

console.log('path-->>' + path);

console.log('path-->>' + path.join('/readFile.txt'));

console.log('path-->>' + path.join('./readFile.txt'));

console.log('nodejs专有变量 __dirname-->>' + '\n' + __dirname + '\n');

console.log('nodejs专有变量 __filename-->>' + '\n' + __filename + '\n');

// 输出当前目录
console.log('process.cwd()--执行命令path-->>' + '\n' + process.cwd() + ' \n');

// 输出当前版本
console.log('process.version ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());



