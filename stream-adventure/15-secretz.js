'use strict';
var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through2');


var name= process.argv[2];
var pass = process.argv[3];
var fileStream = process.stdin;

var parser = tar.Parse();

parser.on('entry', function (entry) {
    var makeHash = crypto.createHash('md5', { encoding: 'hex' });
    var logHash = through(function (hash, _, cb) {
        console.log(hash + ' ' + entry.path);
        cb();
    });
    if (entry.type === 'File') {
        entry
            .pipe( makeHash )
            .pipe( logHash )
        ;
    }
});

fileStream
    .pipe( crypto.createDecipher( name, pass) )
    .pipe( zlib.createGunzip() )
    .pipe( parser )
    .pipe( process.stdout )
;
