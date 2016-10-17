var fs = require('fs');
var level = require('level');
var json = require(process.argv[3]);
var db = level(process.argv[2], {
    valueEncoding: 'json'
});
var batch =  db.batch();
json.forEach(function (item) {
    var key = item.type === 'user' ?
        item.name : (item.user + '!' + item.name) ;
    batch.put(key, item);
});
db.on('ready', function () {
    batch.write();
});
