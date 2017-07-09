var scrabble = require('../num19_scrabble');
var chai = require('chai');
var expect = chai.expect;

let scrabble_char_values = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
};

describe('scrabble', function () {
    context('when nothing is based in', function () {
        it('returns "0"', function () {
            var points = scrabble('', scrabble_char_values);
            expect(points).to.equal(0);
        });
    });
    context('when Oxyphenbutazone is based in', function () {
        it('returns "41"', function () {
            var points = scrabble('Oxyphenbutazone', scrabble_char_values);
            expect(points).to.equal(41);
        });
    });
});