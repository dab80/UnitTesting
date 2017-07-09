var find = require('../num15_find');
var chai = require('chai');
var expect = chai.expect;

describe('find', function () {
    context('when value is not in array', function () {
        it('returns "-1"', function () {
            var arrayIndex = find([0,1,2,3,4,5,6,7], 8);
            expect(arrayIndex).to.equal(-1);
        });
    });
    context('when value is missing', function () {
        it('returns "-1"', function () {
            var arrayIndex = find([0,1,2,3,4,5,6,7]);
            expect(arrayIndex).to.equal(-1);
        });
    });
    context('when value is not in array', function () {
        it('returns "-1"', function () {
            var arrayIndex = find([0,1,2,3,4,5,6,7], -1);
            expect(arrayIndex).to.equal(-1);
        });
    });
    context('when value is first in array', function () {
        it('returns "0"', function () {
            var arrayIndex = find([0,1,2,3,4,5,6,7], 0);
            expect(arrayIndex).to.equal(0);
        });
    });
    context('when value is middle-ish in array', function () {
        it('returns "4"', function () {
            var arrayIndex = find([0,1,2,3,4,5,6,7], 4);
            expect(arrayIndex).to.equal(4);
        });
    });
    context('when value is last in array', function () {
        it('returns "7"', function () {
            var arrayIndex = find([0,1,2,3,4,5,6,7], 7);
            expect(arrayIndex).to.equal(7);
        });
    });
});