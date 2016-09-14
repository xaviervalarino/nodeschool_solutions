var http  =  require('http');
// var bl    =  require('bl');

  http.get(process.argv[2], function(res) {
  
  // USING BUFFER LIST

  // res.pipe(bl(function(err, data){
  //     console.log(
  //       data.length,
  //       data.toString());
  // }));

  var dataArray = [];

  res
    .setEncoding('utf8')  // or use javascript .toString()
    .on('data', function(data) {
      dataArray.push(data);
    })
    .on('end', function() {
      var dataString = dataArray.join("");
      console.log(dataString.length);
      console.log(dataString);
    });

});