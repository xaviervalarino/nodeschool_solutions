var crypto = require('crypto');
var tr = require('through2');

var passphrase = process.argv[2];

process.stdin
    .pipe( crypto.createDecipher('aes256', passphrase) )
    .pipe( process.stdout )
;
