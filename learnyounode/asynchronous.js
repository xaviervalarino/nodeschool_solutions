var fs = require('fs');
fs.readFile(process.argv[2], function doneReading(err, fileContents) {
  var string = fileContents.toString();
  var newLines = string.split( '\n' );
  console.log(newLines.length - 1);
});
