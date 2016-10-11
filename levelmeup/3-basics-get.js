var level = require('level');
var db = level(process.argv[2]);

(function iterate (i) {
    var key = 'key' + i;
    db.get(key, function (err, value) {
	if( err && err.type !== 'NotFoundError') throw err;
	if (value !== undefined) console.log(key + '=' + value);
	if ( i <= 100) iterate(++i);
    });
}(0));

