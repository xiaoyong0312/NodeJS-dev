var fs = require('fs');

fs.realpath('./readFile.txt', function (err, resolvedPath) {
  if (err)
    throw err;
  console.log('realpath -->\n' + resolvedPath);
});