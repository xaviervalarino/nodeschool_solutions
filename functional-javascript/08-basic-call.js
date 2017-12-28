'use strict';

function duckCount () {
    function quacks (obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }
    var ducks = Array.prototype.filter.call(arguments, quacks, 0)
    return ducks.length;
}

module.exports = duckCount;
