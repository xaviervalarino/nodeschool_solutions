var level = require('level');
var db = level(process.argv[2]);
var data = JSON.parse(process.argv[3]);

Object.keys(data).forEach(function (key) {
    db.put(key, data[key], function (err, value) {
	if (err) throw err;
    });
});
