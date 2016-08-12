var fs = require('fs');

fs.writeFile('./writeFile.txt', 'This is xuyong write something! --> 1', [encoding = 'utf8'], function (err) {
  if (err)
    throw err;
  console.log('write success... --> 1');
});

fs.writeFile('./writeFile.txt', 'This is xuyong write something! --> 2', [encoding = 'utf8'], function (err) {
  if (err)
    throw err;
  console.log('write success... --> 2');
});

fs.writeFile('./writeFile.txt', 'This is xuyong write something! --> 3', [encoding = 'utf8'], function (err) {
  if (err)
    throw err;
  console.log('write success... --> 3');
});

fs.writeFile('./writeFile.txt', 'This is xuyong write something! --> 4', [encoding = 'utf8'], function (err) {
  if (err)
    throw err;
  console.log('write success... --> 4');
});


console.log('last -->>');