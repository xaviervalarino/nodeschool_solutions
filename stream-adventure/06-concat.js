var concat = require('concat-stream');
var concatStream = concat(function (buf) {
    console.log(buf.toString().split('').reverse().join(''));
});

process.stdin.pipe(concatStream);
