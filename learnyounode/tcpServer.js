var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];
var file = process.argv[3]

var server = net.createServer( function (socket) {

  var timestamp = strftime('%F %R' + '\n')
  socket.end(timestamp);

});
server.listen(port); 