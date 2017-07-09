var processChange = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;

describe('processChange', function () {
    context('when passing in 0', function () {
        it('returns "0,0,0,0"', function () {
            var change_array = processChange(0);
            expect(change_array).to.equal("0,0,0,0");
        });
    });
    context('when passing in 7', function () {
        it('returns "0,0,1,2"', function () {
            var change_array = processChange(7);
            expect(change_array).to.equal("0,0,1,2");
        });
    });
    context('when passing in 49', function () {
        it('returns "2,0,1,4"', function () {
            var change_array = processChange(49);
            expect(change_array).to.equal("2,0,1,4");
        });
    });
    context('when passing in 96', function () {
        it('returns "4,1,1,1"', function () {
            var change_array = processChange(96);
            expect(change_array).to.equal("4,1,1,1");
        });
    });
    context('when passing in 279', function () {
        it('returns "13,1,1,4"', function () {
            var change_array = processChange(279);
            expect(change_array).to.equal("13,1,1,4");
        });
    });                
});