'use strict';

module.exports = function arrayMap (arr, fn) {
    var thisArg = arguments[2] || fn;
    return arr.reduce(function (prev, curr, i, arr) {
        var mapped = [ fn.call( thisArg, curr, i, arr) ];
        return prev.concat(mapped);
    }, []);
}

