var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function (err, data) {
  var string = data.toString();
  var newLines = string.split( '\n' );
  console.log(newLines.length - 1);
});
