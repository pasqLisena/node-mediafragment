var assert = require('assert'),
    mfParser = require('../index');

/* Test cases are contained in file tests.json.
 *
 * To convert original test cases (https://github.com/tomayac/Media-Fragments-URI/blob/master/test_resources/testcases.tsv)
 * to json format, it as been used the following regular expression
 * MATCHING EXPRESSION:
 * /TC\d{4}-UA\s+http:\/\/www\.w3\.org\/2008\/WebVideo\/Fragments\/media\/spatial_\d\dfps(_audio_only)?.webm#([^\s]+)[\s]+([^{]+)(\{.+\})/
 * REPLACING EXPRESSION:
 * /{"input":"$2","text":"$3","result":$4},/
 *
 * Please note that all results are written as "hash", while we do also a "query" test
 */

var testPath = 'www.example.com';
var testJson = require('./tests.json');
var fragToTest = testJson.tests;

describe('#query', function () {
    fragToTest.forEach(function (f) {
        it('parsing ?' + f.input + ' --> ' + f.text, function () {
            var mf = mfParser.parse(testPath + '?' + f.input);
            if (f.hasOwnProperty('result')) {
                assert.deepEqual(mf.query, f.result.hash, "Failed");
            }
        });
    });
});

describe('#hash', function () {
    fragToTest.forEach(function (f) {
        it('parsing #' + f.input + ' --> ' + f.text, function () {
            var mf = mfParser.parse(testPath + '#' + f.input);
            if (f.hasOwnProperty('result')) {
                assert.deepEqual(mf.hash, f.result.hash, "Failed");
            }
        });
    });
});
