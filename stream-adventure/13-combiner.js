var combine = require('stream-combiner');
var through = require('through2');
var split = require('split');
var zlib = require('zlib');

module.exports = function () {
    'use strict';
    var genre;
    var sort = through( organizeBooks, last )

    function organizeBooks (chunk, _, cb) {
        var stream = this;
        if ( !chunk.length ) return cb();

        var row = JSON.parse(chunk);

        if ( row.type === 'genre' ) {
            // push last genre and create next
            if ( genre ) {
                stream.push( JSON.stringify(genre) + '\n' );
            }
            genre = {};
            genre.name = row.name;
            genre.books = [];
        } else if ( row.type === 'book' ) {
        // add books to the genre
            genre.books.push(row.name)
        }
        cb();
    }

    function last (cb) {
        if ( genre ) {
            this.push( JSON.stringify(genre) + '\n' );
        }
        cb();
    }
    // read newline-separated JSON,
    // group books into genres,
    // then gzip the output

    return combine( split(), sort, zlib.createGzip() );
}
