'use strict';

function Spy (target, method) {
    var spy = this;
    // save original target method
    var slice = Array.prototype.slice;
    var ogFn = target[method];

    if ( !(spy instanceof Spy) ) {
        return new Spy(target, method);
    }
    spy.count = 0;

    // rewrite target's method
    target[method] = function () {
        spy.count++;
        return ogFn.apply(target, arguments );
    }
}

var spy = Spy(console, 'error');
