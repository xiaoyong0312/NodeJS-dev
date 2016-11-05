'use strict';
/**
 * @desc util.js 中 为一些 基础公共方法;
 */
module.exports = {
  type,
  isStr,
  isNull,
  isArray,
  isFn
}

/**
 * 判断数据类型;
 * @param type
 * @returns {*}
 */
function type(type) {
  console.log('typeof type-->>' + typeof type);
  return typeof type;
  //return Object.prototype.toString().call(type);
}

/**
 * 判断是不是字符串;
 * @param str
 * @returns {boolean}
 */
function isStr(str) {
  return type(str) === '[object String]';
}

/**
 * 判断是否为空(immutable 中可用 'a'.isEmpty(););
 * @param str
 * @returns {boolean}
 */
function isNull(str) {
  if (type(str) === '[undefined]' || str == null) {
    return true;
  } else {
    return false;
  }
}

/**
 * 判断当前的参数是不是数组;
 * @param arr
 * @returns {boolean}
 */
function isArray(arr) {
  return type(arr) === '[object Array]';
}

/**
 * 判断是不是函数;
 * @param fn
 * @returns {boolean}
 */
function isFn(fn) {
  return type(fn) === '[object Function]';
}
