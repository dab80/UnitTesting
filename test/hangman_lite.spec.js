var hangManVeryLite = require('../hangman_lite');
var chai = require('chai');
var expect = chai.expect;

describe('hangManVeryLite', function () {
    context('when passing in more than one letter', function () {
        it('returns "0"', function () {
            var guess = hangManVeryLite("dd", 'IronYard');
            expect(guess).to.equal(0);
        });
    });
    context('when passing in a non letter', function () {
        it('returns "0"', function () {
            var guess = hangManVeryLite("2", "IronYard");
            expect(guess).to.equal(0);
        });
    });
    context('when passing in a letter not in the secret word', function () {
        it('returns "0"', function () {
            var guess = hangManVeryLite("w", "IronYard");
            expect(guess).to.equal(0);
        });
    });
    context('when passing a letter in the secret word', function () {
        it('returns "2"', function () {
            var guess = hangManVeryLite("r", "IronYard");
            expect(guess).to.equal(2);
        });
    });
});