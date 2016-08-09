var fs = require('fs');

fs.readFile('D:/nodeExamples/doFile/myModule.js', 'UTF-8', function (err, data) {
	if (err)
		throw err;

	var names = ['Tom', 'Jim', 'Miker', 'HanMeimei', 'LiLei'];
	
	console.log('--> start');
	console.log(testWrite(names));
	console.log('--> end');
});

var testWrite = function (names) {
	var return1 = names.map(function (value, key) {
			//console.log('value-->' + value);
			return value;
		});
	return return1;
}