/**
 * traducteur tests.
 *
 * @package traducteur
 * @author Zachary Bruggeman <zachb@diy.org>
 */

var async      = require('async'),
    test       = require('tap').test,
    traducteur = require('../lib/traducteur')('API KEY');


async.auto({

    translate: function (callback) {
        traducteur.translate({
            q: 'Bonjour',
            target: 'en'
        }, callback);
    },

    detect: function (callback) {
        traducteur.detect({
            q: 'Bonjour'
        }, callback);
    },

    languages: function (callback) {
        traducteur.languages(callback);
    },

    test: ['translate', 'detect', 'languages', function (callback, obj) {
        test('Module definition', function (t) {
            t.type(traducteur, 'object', 'Module should be an object.');
            t.type(traducteur.translate, 'function', 'traducteur.translate should be a function.');
            t.type(traducteur.detect, 'function', 'traducteur.detect should be a function.');
            t.type(traducteur.languages, 'function', 'traducteur.languages should be a function.');
            t.end();
        });

        test('Translate', function (t) {
            t.type(obj.translate, 'object', 'Results should be an object.');
            t.end();
        });

        test('Detect', function (t) {
            t.type(obj.detect, 'object', 'Results should be an object.');
            t.end();
        });

        test('Languages', function (t) {
            t.type(obj.languages, 'object', 'Results should be an object.');
            t.end();
        });

        callback();
    }]
}, function(err, obj) {
    test('Catch errors', function(t) {
        t.equal(err, null, 'Errors should be null.');
        t.end();
    });
});