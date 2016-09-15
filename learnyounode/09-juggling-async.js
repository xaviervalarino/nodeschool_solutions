var http  =  require('http');

// all 3 (or more) server addresses
var servers = process.argv.slice(2, process.argv.length);
var response = [];
var pending = servers.length;


servers.map( function (url,i) {

  http.get(url, function (res) {
  
    var data = '';
    
    res.on('error', function (err) {
      console.log("Error", err.message);
    });


    res.on('data', function (chunk) {
      data += chunk.toString();
    });


    res.on('end', function () {
      response[i] = data;
      if ( --pending === 0 ) {
        response.map( function (i) {
          console.log(i);
        });
      }
    });

  });

});