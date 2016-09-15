var http = require('http');
var url = require('url');
var strf = require('strftime');


var server = http.createServer( function (req, res) {

      
  var urlObj    = url.parse(req.url, true),
      pathname  = (urlObj.pathname),
      reqTime   =  new Date(urlObj.query.iso),
      result; 
  
  if ( pathname === '/api/parsetime' ) {
    result = {
      hour:   Number( strf( '%H', reqTime ) ),
      minute: Number( strf( '%M', reqTime ) ),
      second: Number( strf( '%S', reqTime ) )
    };
  } 
  else  if ( pathname === '/api/unixtime' ) {
    result = {
      unixtime: reqTime.getTime() 
    };
  } 

  if ( result ) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end(result);
  res.end( JSON.stringify(result) );
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(process.argv[2]);
