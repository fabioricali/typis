const typis = require('../index');
const be = require('bejs');

describe('typis', function () {
    describe('get', function () {
        it('should be return Boolean', function () {
            const result = typis.get(true);
            console.log(result);
            be.err.equal(result, 'Boolean');
        });
        it('should be return String', function () {
            const result = typis.get('Hello');
            console.log(result);
            be.err.equal(result, 'String');
        });
    });
    describe('is', function () {
        it('should be return true', function () {
            const result = typis.is(true, 'boolean');
            console.log(result);
            be.err.true(result);
        });
        it('should be return false', function () {
            const result = typis.is('Hello', 'number');
            console.log(result);
            be.err.false(result);
        });
        it('should be return error', function (done) {
            try {
                typis.is('Hello');
            } catch(e) {
                console.log(e.message);
                done();
            }
        });
    });
});