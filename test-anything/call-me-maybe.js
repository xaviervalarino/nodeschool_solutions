var repeatCallback = require(process.argv[2]);
var test = require('tape');
var n = 71;

test('repeatCallback', function (t) {
  t.plan(n);
  repeatCallback(n, function(){
    t.pass('callback called');
  });
});
