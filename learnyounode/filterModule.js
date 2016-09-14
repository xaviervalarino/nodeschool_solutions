var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {

  fs.readdir(dir, function (err, data) {
    if (err) {
      return callback(err);
    }

    var result = data.filter(function (data) {
      return path.extname(data) === '.' + ext;
    });
    callback(null, result);
  });

};