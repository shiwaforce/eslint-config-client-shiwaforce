/**
 * easier is better
 * @author sarkiroka on 2017.02.21.
 */
export default {
	'complexity': ['error'],
	'max-len': ['error', { code: 160, ignoreTrailingComments: true, ignoreUrls: true }],
	'max-lines': ['error', { max: 300, skipComments: true, skipBlankLines: true }],
	'max-nested-callbacks': ['error', { max: 3 }],
	'no-empty': ['error'],
	'no-eval': ['error']
};
