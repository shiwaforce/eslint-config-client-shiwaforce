/**
 * wrapper for rules
 * @author sarkiroka on 2017.02.21.
 */
var extend = require('extend');
var beauty = require('./beauty');
var complexity = require('./complexity');
var debugging = require('./debugging');
var errors = require('./errors');
var git = require('./git');
var separator = require('./separator');
var spacing = require('./spacing');
var etc = require('./etc');

var rules = extend({}, beauty, complexity, debugging, errors, git, separator, spacing, etc);
module.exports = rules;
