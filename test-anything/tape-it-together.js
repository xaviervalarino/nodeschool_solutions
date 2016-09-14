var test = require('tape');
var fancify = require(process.argv[2]);

var str = 'Hello';
var wrapped = '~*~'+str+'~*~';
var char = '%';
var charWrapped = '~'+char+'~'+str+'~'+char+'~';

test('fancify', function (t) {
  t.equal(fancify(str), wrapped, 'Wraps a string in ~*~');
  t.equal(fancify(str, true), wrapped.toUpperCase(), 'Optionally makes it allcaps');
  t.equal(fancify(str, false, char), charWrapped, 'Optionally allows to set the character');
  t.end();
});