console.log('--> start1');
var tempStr = "深入浅出node.js";
var buffer = new Buffer(tempStr, 'utf-8');
console.log(buffer);
console.log('--> end1');

//给元素的赋值如果小于0，就将该值逐次加256，直到得到一个0到255之间的整数。如果得到的数值大于255，就逐次减256，直到得到0~255区间内的数值。如果是小数，舍弃小数部分，只保留整数部分；
console.log('--> start2');
var buffer2 = new Buffer(100);
console.log('buffer2.length: ' + buffer2.length);
buffer2[2] = -100;
console.log(buffer2[2]); // 156
buffer2[3] = 300;
console.log(buffer2[3]); // 44
buffer2[4] = 3.1415;
console.log(buffer2[4]); // 3
console.log('--> end2');
