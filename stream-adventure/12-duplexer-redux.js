var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var count = {};
    var readable = counter;
    var writable = through( countCountries, end);

    function countCountries (data,_, next) {
        if (count[data.country]) count[data.country]++;
        else  count[data.country] = 1;
        next();
    }

    function end (done) {
        counter.setCounts(count);
        done();
    }

    return duplexer( {objectMode: true}, writable, readable);
};
