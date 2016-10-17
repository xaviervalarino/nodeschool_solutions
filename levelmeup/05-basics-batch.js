var fs = require('fs');
var level = require('level');
var db = level(process.argv[2]);
var through = require('through2');
var split = require('split');

var entries = [];
var file = fs.createReadStream(process.argv[3]);
var collectEntries = through( function (line, _, next) {
    var data = line.toString().split(',');
    var entry = {};
    entry.type  = data[0];
    entry.key =  data[1];
    if (data[2]) entry.value = data[2];
    entries.push(entry);
    next();
});

file.pipe(split())
    .pipe(collectEntries)
    .on('finish', function () {
        db.batch(entries, function (err) {
            if (err) throw err;
        });
    })
;
