var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var newlines = string.split('\n');

// minus one b/c there is no newline at the end of the file
console.log(newlines.length - 1);
