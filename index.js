/**
 * eslint config client set
 * apply to your browser application client side code
 * @author sarkiroka on 2017.02.17.
 */
var envrionment = require('./rules/envrionment');
var rules = require('./rules/rules');

module.exports = {
	env: envrionment,
	globals: require('./rules/globals'),
	rules: rules
};
