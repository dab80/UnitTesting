var processPalidrome = require('../find_palidromes');
var chai = require('chai');
var expect = chai.expect;

describe('processPalidrome', function () {
    context('when passing nothing', function () {
        it('returns "false"', function () {
            var answer = processPalidrome('');
            expect(answer).to.equal(false);
        });
    });
    context('when passing single number', function () {
        it('returns "false"', function () {
            var answer = processPalidrome('5');
            expect(answer).to.equal(false);
        });
    });
    context('when passing letters & numbers', function () {
        it('returns "false"', function () {
            var answer = processPalidrome('a7a');
            expect(answer).to.equal(false);
        });
    });
    context('when passing non paidrome', function () {
        it('returns "false"', function () {
            var answer = processPalidrome('abcdefg');
            expect(answer).to.equal(false);
        });
    });
    context('when passing single letter', function () {
        it('returns "true"', function () {
            var answer = processPalidrome('a');
            expect(answer).to.equal(true);
        });
    });
    context('when passing radar', function () {
        it('returns "true"', function () {
            var answer = processPalidrome('radar');
            expect(answer).to.equal(true);
        });
    });
    context('when passing asdfghjklkjhgfdsa', function () {
        it('returns "true"', function () {
            var answer = processPalidrome('asdfghjklkjhgfdsa');
            expect(answer).to.equal(true);
        });
    });                    
});