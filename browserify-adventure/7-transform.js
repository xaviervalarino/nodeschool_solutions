var fs = require('fs');
var sprintf = require('sprintf-js').sprintf;

var data = fs.readFileSync(__dirname + '/lib/wake.txt', 'utf8');
data = data.split('\n').map(function (line, i) {
   if (i % 5) i = ' ';
   return sprintf('%3s %s', i, line);
}).join('\n');

console.log(data);
