var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];



function filter(dir, ext, callback) {

  fs.readdir(dir, function (err, data) {
    if (err) {
      return callback(err);
    }

    var result = data.filter(function (data) {
      return path.extname(data) === '.' + ext;
    });
    callback(null, result);
  });

}

filter(dir, ext, function(err, files){
  if ( err ) {
    return console.log('There was an error:', err);
  }
  files.forEach(function (file){
    console.log(file);
  });
});
