var http = require('http');
var fs = require('fs');
var through = require('through2');

var tr = through(function writeUppercase (buffer, _, next) {
    buffer = buffer.toString().toUpperCase();
    this.push(buffer);
    next();
});

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(tr).pipe(res);
    }
});
server.listen(process.argv[2]);
