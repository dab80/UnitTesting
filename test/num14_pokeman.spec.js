var pokemon = require('../num14_pokeman');
var chai = require('chai');
var expect = chai.expect;

describe('pokemon', function () {
    context('when nothing is based in', function () {
        it('returns "0"', function () {
            var anArray = pokemon([]);
            expect(anArray).to.have.all.members([]);
        });
    });
    context('when [1,2,3] is based in', function () {
        it('returns "[1, 3, 6]"', function () {
            var anArray = pokemon([1,2,3]);
            expect(anArray).to.have.all.members([1, 3, 6]);
        });
    });
    context('when [1, 2, 5, 1, 3] based in', function () {
        it('returns "[1,3,8,9,12]"', function () {
            var anArray = pokemon([1, 2, 5, 1, 3]);
            expect(anArray).to.have.all.members([1, 3, 8, 9, 12]);
        });
    });

});
