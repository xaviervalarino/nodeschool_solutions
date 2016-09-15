var http = require('http');
var fs = require('fs')
var strftime = require('strftime');

var port = process.argv[2];
var file = process.argv[3];


var server = http.createServer( function (req, res) {

  readStream = fs.createReadStream(file);

  res.writeHead(200);
  readStream.pipe(res);

});
server.listen(port);
