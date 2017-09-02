/**
 * @global
 * @type {{_toString: (function(*=)), get: (function(Object)), is: (function(Object, string)), throw: (function(Object, string, *=))}}
 */
const Typis = {

    /**
     * Convert object to string
     * @param object
     * @returns {*}
     * @private
     * @ignore
     */
    _toString: (object) => {
        return Object.prototype.toString.call(object);
    },

    /**
     * Get object type
     * @param object {Object} object
     * @returns {string}
     * @example
     * typis.get('hello'); //=> String
     */
    get: (object) => {
        let toString = Typis._toString(object);
        return toString.slice(8, toString.length - 1);
    },

    /**
     * Check object type
     * @param object {Object} object
     * @param type {string} type string can be also lowercase
     * @returns {boolean}
     * @example
     * typis.is('hello', 'number'); //=> false
     */
    is: (object, type) => {
        if (typeof type !== 'string')
            throw new Error('type must be a string');
        return Typis.get(object).toLowerCase() === type.toLowerCase();
    },

    /**
     * Check object type and throw an error if not satisfied
     * @param object {Object} object
     * @param type {string} type string can be also lowercase
     * @param [msg] {string} message error
     * @returns {boolean}
     * @example
     * try {
     *      typis.throw('hello', 'number');
     * } catch(e) {
     *      console.log(e);
     * }
     */
    throw: (object, type, msg = '') => {
        if (!Typis.is(object, type)) {
            throw new Error(msg || 'object type mismatch, must be a ' + type);
        }
        return true;
    }
};

module.exports = Typis;