'use strict';
var express = require('express');
var app = express();

/**
 * 各种配置(日志, router, sso/jwt, 中间件, 自行扩展的 as so on ...)
 */
module.exports = app;

console.log('项目启动中...');

/*app.use(express.static());*/

app.use(express('NodeJS-dev'));

console.log(`__dirname-->> ${__dirname}`);
//app.use(express.static(`__dirname`));

app.use(express.static('images'));






