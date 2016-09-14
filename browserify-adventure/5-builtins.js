var url = require('url');
var queryString = require('querystring');

var addr = prompt();
var query = url.parse(addr).query;
var params = queryString.parse(query);
console.log(url.resolve(addr, params.file));
