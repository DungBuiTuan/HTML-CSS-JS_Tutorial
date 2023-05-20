if (!String.prototype.includes) {
    String.prototype.include = function(search, start) {
        'use strict';
        if (search instanceof RegExp) {
            throw TypeError('Error');
        }
        if (start === undefined) {
            return 'javascript course'.indexOf(search, start) !== -1;
        }
    };
}

'javascript course'.includes('javascript', 0);