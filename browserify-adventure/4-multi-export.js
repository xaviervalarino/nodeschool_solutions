var ndjson = require('./modules/ndjson.js');
var parse = ndjson.parse( prompt() );
var serialize = ndjson.stringify( prompt() );

console.log(parse);
console.log(serialize);
