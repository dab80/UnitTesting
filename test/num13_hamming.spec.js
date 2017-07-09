var hamming = require('../num13_hamming');
var chai = require('chai');
var expect = chai.expect;

describe('hamming', function () {
    context('when strings are equal length but different', function () {
        it('returns "18"', function () {
            var value = hamming('This is a short string', 'This is a silly string');
            expect(value).to.equal(18);
        });
    });
    context('when strings are not equal', function () {
        it('returns "0"', function () {
            var value = hamming('This is a short string', 'This is a longer silly string');
            expect(value).to.equal(0);
        });
    });
    context('when strings are the same', function () {
        it('returns "22"', function () {
            var value = hamming('This is a short string', 'This is a short string');
            expect(value).to.equal(22);
        });
    });
});
