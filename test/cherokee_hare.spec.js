var cherokeeHare = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;

describe('cherokeeHare', function () {
    context('when passing in 200, .1, 5', function () {
        it('returns "322"', function () {
            var numHares = cherokeeHare(200, .1, 5);
            expect(numHares).to.equal(322);
        });
    });
    context('when passing in 250, .1, 6', function () {
        it('returns "442"', function () {
            var numHares = cherokeeHare(250, .1, 6);
            expect(numHares).to.equal(442);
        });
    });
    context('when passing in 300, .1, 7', function () {
        it('returns "584"', function () {
            var numHares = cherokeeHare(300, .1, 7);
            expect(numHares).to.equal(584);
        });
    });
    context('when passing in 400, .1, 8', function () {
        it('returns "857"', function () {
            var numHares = cherokeeHare(400, .1, 8);
            expect(numHares).to.equal(857);
        });
    });
});