var select_tallest = require('../tallest_mtn');
var chai = require('chai');
var expect = chai.expect;

describe('select_tallest', function () {
    context('when passing in 10 mtn heights', function () {
        it('returns 20310 for tallest', function () {
            var tallest = select_tallest([16237, 17402, 15325, 20310, 99, 14829, 18009, 16421, 16391, 15787, 14951]);
            expect(tallest).to.equal(20310);
        });
    });
});