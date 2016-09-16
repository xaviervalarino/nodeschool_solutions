var through = require('through2');
var transform = through(write, end);

function write (buffer, _, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end (done) {
    done();
}

process.stdin.pipe(transform).pipe(process.stdout);
