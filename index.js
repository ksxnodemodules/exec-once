
'use strict';

var once = fn => {

    var exec = args => {
        const VALUE = fn(...args);
        exec = () => VALUE;
        return VALUE;
    };

    return (...args) => exec(args);

};

module.exports = once;
