var iconv = require('iconv-lite');

console.log('--> start');

var str1 = "我是一个高尚的人";
var arr = iconv.encode(str1, 'UTF-8');
console.log('11--> ' + arr);
var str2 = iconv.decode(arr, 'UTF-8');
console.log('22--> ' + str2);

// var str3 = iconv.encode('aa', 'UTF-8');
// console.log('33--> ' + str3);
// var str4 = iconv.decode('bb', 'UTF-8');
// console.log('33--> ' + str4);

// var str5 = "我是一个高尚的人";
// var arr5 = iconv.encode(str5, 'gbk');
// console.log('55--> ' + arr5);
// var str6 = iconv.decode(arr5, 'gbk');
// console.log('66--> ' + str6);

console.log('我的。。。');

console.log('--> end');


