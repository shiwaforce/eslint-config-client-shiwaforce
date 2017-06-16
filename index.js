/**
 * eslint config client set
 * apply to your browser application client side code
 * @author sarkiroka on 2017.02.17.
 */
var ecmaFeatures = require('./rules/ecma-features');
var envrionment = require('./rules/envrionment');
var parser = require('./rules/parser');
var predefinedGlobals = require('./rules/globals');
var rules = require('./rules/rules');

module.exports = {
	parser: parser,
	env: envrionment,
	parserOptions: {
		ecmaFeatures: ecmaFeatures
	},
	globals: predefinedGlobals,
	rules: rules
};
