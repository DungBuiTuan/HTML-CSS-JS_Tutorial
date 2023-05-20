if (!String.prototype.includes) {
    String.prototype.include = function(search, start) {
        'use strict';
        if (search instanceof RegExp) {
            throw TypeError('Error');
        }
        if (start === undefined) {
            start = 0;
        }
        return 'javascript course'.indexOf(search, start) !== -1;
    };
}

'javascript course'.includes('javascript', 0);