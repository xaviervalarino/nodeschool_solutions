exports.init = function (db, words, cb) {
    var batch = db.batch();
    words.forEach(function (word) {
	var key = word.length + '!' + word;
	batch.put(key, word);
    });
    batch.write(cb);
};
exports.query = function (db, word, cb) {
    var err = null;
    var match = [];
	var query = word.length + '!' + word.replace(/\*/g, '');
    var rs = db.createReadStream({
		gte: query,
		lte: query + '\xff'
	});
	rs.on('data', function (data) {
		match.push(data.value);
	});
	rs.on('error', function (error) {
	    err = error;
	});
	rs.on('end', function () {
	    cb(err, match);
	});
};
