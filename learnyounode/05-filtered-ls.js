var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];


fs.readdir(dir, function (err, files) {

  var sorted = files.filter( function(files) {
    return path.extname(files) == '\.' + ext;
  });

  for ( var i=0; i < sorted.length; i++ ) {
    console.log(sorted[i]);
  }

});
