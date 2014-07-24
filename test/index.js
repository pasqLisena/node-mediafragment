var should = require('chai').should(),
    mfParser = require('../index');

var testPath = 'www.example.com';
var fragToTest = [
    {
        'input': 't=12,20',
        'outTstart': 12,
        'outTend': 20
    },
    {
        'input': 't=npt:00:01:12,00:01:20',
        'outTstart': 72,
        'outTend': 80
    }
];
describe('#query', function () {
    fragToTest.forEach(function (f) {
        it('parsing ' + f.input, function () {
            var mf = mfParser.parse(testPath + '?' + f.input);
            if (f.hasOwnProperty('outTstart')) {
                mf.query.t[0].startNormalized.should.equal(f.outTstart);
            }
            if (f.hasOwnProperty('outTend')) {
                mf.query.t[0].endNormalized.should.equal(f.outTend);
            }
        });
    });
});
describe('#hash', function () {
    fragToTest.forEach(function (f) {
        it('parsing ' + f.input, function () {
            var mf = mfParser.parse(testPath + '#' + f.input);
            if (f.hasOwnProperty('outTstart')) {
                mf.hash.t[0].startNormalized.should.equal(f.outTstart);
            }
            if (f.hasOwnProperty('outTend')) {
                mf.hash.t[0].endNormalized.should.equal(f.outTend);
            }
        });
    });
});
