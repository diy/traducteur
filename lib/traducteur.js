/**
 * traducteur — A Node.js library for Google's Translation API. C'est bien!
 *
 * Copyright (c) 2013 DIY Co
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this 
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under 
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF 
 * ANY KIND, either express or implied. See the License for the specific language 
 * governing permissions and limitations under the License.
 *
 * @package traducteur
 * @author Zachary Bruggeman <zachb@diy.org>
 */

/**
 * Dependencies
 */
var hyperquest = require('hyperquest'),
    qs         = require('querystring'),
    through    = require('through'),
    _          = require('lodash');

/**
 * Constructor
 */
function Traducteur (key) {
    if (typeof key === 'undefined') {
        throw new Error('An API key was not provided. Google Translate requires an API key, available from your Google API console.')
    };

    this.request = function (uri, options, callback) {
        var obj = '';
        var opts = _.extend(options, {key: key});

        var write = function (data) {
            obj += data;
        };
        var end = function () {
            callback(null, JSON.parse(obj));
        };

        var req = hyperquest(uri + qs.stringify(opts));
        req.on('error', function (res) {
            return callback(res);
        });
        req.pipe(through(write, end));
    };
};

Traducteur.prototype.translate = function (options, callback) {
    this.request('https://www.googleapis.com/language/translate/v2?', options, callback);
};

Traducteur.prototype.detect = function (options, callback) {
    this.request('https://www.googleapis.com/language/translate/v2/detect?', options, callback);
};

Traducteur.prototype.languages = function (callback) {
    this.request('https://www.googleapis.com/language/translate/v2/languages?', {}, callback);
};

module.exports = function (key) {
    return new Traducteur(key);
};
