'use strict';

function countWords (inputWords) {
    return inputWords.reduce(function (count, current) {
        if (count[current]) {
            count[current]++; // add to word count
        } else {
            count[current] = 1; // init count for word
        }
        return count; // teturn the object with counts per word
    }, {}) // begin with empty object
}

module.exports = countWords
