var fs = require('fs');

var path ='/usr/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt';
fs.readFile(path, function (err, data) {
   if (err) throw err;

   var count = 0;
   console.log(count, data);
});
