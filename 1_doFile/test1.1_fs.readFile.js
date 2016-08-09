var fs = require('fs');

// fs.readFile('D:/nodeExamples/1-doFile/myModule.js', 'UTF-8', function (err, data) {
// fs.readFile('./myModule.js', 'UTF-8', function (err, data) {
fs.readFile('./readFile.txt', 'utf8', function (err, data) {
	if (err)
		throw err;

	console.log('successfully');
	// console.log('myModule.js文件的内容；' + data);
	console.log('readFile.txt文件的内容；' + data);
});
console.log('async');
