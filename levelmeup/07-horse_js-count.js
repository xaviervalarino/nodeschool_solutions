module.exports = function (db, date, cb) {
    var err;
    var count = 0;
    var stream = db.createReadStream({
	start: date
    });

    stream.on('data', function (data) {
	count++;
    });
    stream.on('error', function (error) {
	err = error;
    });
    stream.on('end', function () {
	if (cb) cb(err, count);
    });
};
