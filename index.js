'use strict';

var parse = require('js-yaml/lib/js-yaml/loader').load

  , stringify = JSON.stringify;

exports.extension = 'yaml';
exports.type = 'json';
exports.compile = function (src) { return { code: stringify(parse(src)) }; };
