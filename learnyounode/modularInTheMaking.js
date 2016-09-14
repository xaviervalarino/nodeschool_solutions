var fm = require('./filterModule');

var dir = process.argv[2];
var ext = process.argv[3];

fm(dir, ext, function(err, files){
  if ( err ) {
    return console.log('There was an error:', err);
  } 
  files.forEach(function (file){
    console.log(file);
  });
  // console.log(files.join('\ n'));
});
