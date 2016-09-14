var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var newLines = string.split( '\n' );
    
console.log(newLines.length - 1);
