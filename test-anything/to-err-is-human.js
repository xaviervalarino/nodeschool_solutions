var feedCat = require(process.argv[2]);
var test = require('tape');

test('feed cat', function(t){
  t.plan(2);
  t.equals(feedCat('food'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));
});
