var level = require('level');
var dir = process.argv[2];
var key = process.argv[3];
var db = level(dir);

db.get(key, function (err, value) {
    if (err) throw err;
    console.log(value);
});
