var assert = require('assert');

/**
 * 断言规范中提供的方法(共有: 8+2 种)：
 * ok() // 判断结果是否为真；
 * equal()
 * notEqual()
 * deepEqual() // 判断实际值与期望值是否深度相等(对象或数组的元素是否相等);
 * notDeepEqual()
 * strictEqual() // 判断实际值与期望值是否严格相等(相当 ===);
 * notStrictEqual() // 判断实际值与期望值是否严格相等(相当 !==);
 * throws()
 *
 * doesNotThrow()
 * ifError() // 判断实际值是否为一个假值(null, undefined, 0, '', false),如果是假值为真，将会抛出异常；
 *
 * eg: assert.ok(100, [message]);// message为测试不通过(报错)时打印的信息；
 */

// ok()
console.log('ok()--> ' + assert.ok('100', 'would not show me !'));
console.log(assert.ok('100', 'would not show me !'));

// equal()
console.log('equal()--> ' + assert.equal(Math.max(1, 100), 100)); // 一旦assert.equal()不满足期望，将会报出AssertionError异常；

// deepEqual()
var a = [0, 1, 2, 3, 4];
var b = [0, 1, 2, 3, 4];
var c = [0, 1, 2, 3, 5];
console.log('deepEqual()--> ' + assert.deepEqual(a, b, 'this is deepEqual()...'));



