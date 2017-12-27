'use strict';

function reduce (arr, fn, init) {
    function reducer(index, prev) {
        var curr = arr[index]; // get current using index
        var prev = fn(prev, curr, index, arr); // run cb op on previous

        // end recursion
        if (arr.length === index + 1) { return prev; }

        // up the index count and tail recurse
        index++;
        return reducer(index, prev);
    }
    // start recursion
    return reducer(0, init);
}

var test = reduce([1,2,3], function(prev, curr, index, arr) {
    return prev + curr;
}, 0)

module.exports = reduce;
