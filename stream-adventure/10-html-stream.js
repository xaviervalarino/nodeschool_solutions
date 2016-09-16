var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var loud = tr.select('.loud').createStream();

loud.pipe(through(function(buffer, _, next){
    buffer = buffer.toString().toUpperCase();
    this.push(buffer);
    next();
})).pipe(loud)
;

process.stdin.pipe(tr).pipe(process.stdout);
