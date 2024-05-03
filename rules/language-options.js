import globals from 'globals';
import customGlobals from './globals.js';
export default {
	globals: {
		...globals.browser,
		...globals.es2021,
		...globals.commonjs,
		...globals.jasmine,
		...globals.jquery,
		...customGlobals
	}
};
