var through = require('through2');
var split = require('split');
var count = 1;
var tr = through(function (line, _, next) {
    line = line.toString();
    if (count % 2 === 0) line = line.toUpperCase();
    else line = line.toLowerCase();
    this.push(line + '\n');
    count ++;
    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;
