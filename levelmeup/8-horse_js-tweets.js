module.exports = function (db, date, cb) {
    var err;
    var result = [];
    var stream = db.createReadStream({
	start: date,
        end: date + '\xff'
    });

    stream.on('data', function (data) {
        result.push(data.value);
    });
    stream.on('error', function (error) {
	err = error;
    });
    stream.on('end', function () {
	if (cb) cb(err, result);
    });
};
