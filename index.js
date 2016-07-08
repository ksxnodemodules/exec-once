
'use strict';

var once = fn => {

    var exec = () => {
        const VALUE = fn();
        exec = () => VALUE;
        return VALUE;
    };

    return () => exec();

};

module.exports = once;
