
'use strict';

var once = fn => {

    var exec = () => {
        try {
            const value = fn();
            exec = () => value;
            return value;
        } catch (error) {
            exec = () => {throw error};
            throw error;
        }
    };

    return () => exec();

};

module.exports = once;
