var sprint = require('../num18_sprint');
var chai = require('chai');
var expect = chai.expect;
let sprinters = [{
    name: "Maurice Greene",
    time: 9.79
  },
  {
    name: "Justin Gatlin",
    time: 9.85
  },
  {
    name: "Carl Lewis",
    time: 9.86
  },
  {
    name: "Usain Bolt",
    time: 9.58
  },
  {
    name: "Bruny Surin",
    time: 9.84
  },
  {
    name: "Olusoji Fasuba",
    time: 9.85
  },
  {
    name: "Donovan Bailey",
    time: 9.84
  },
  {
    name: "Asafa Powell",
    time: 9.72
  },
  {
    name: "Tyson Gay",
    time: 9.69
  },
  {
    name: "Leroy Burrell",
    time: 9.85
  }
];

let nothing = [{}];

describe('sprint', function () {
  context('when passing in nothing', function () {
    it('returns "undefined"', function () {
      var theFastest = sprint(nothing);
      expect(theFastest).to.equal(undefined);
    });
  });
  context('when passing in array of 10 objects', function () {
    it('returns "Usain Bolt"', function () {
      var theFastest = sprint(sprinters);
      expect(theFastest).to.equal('Usain Bolt');
    });
  });
});