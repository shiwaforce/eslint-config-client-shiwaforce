/**
 * wrapper for rules
 * @author sarkiroka on 2017.02.21.
 */
import beauty from './beauty.js';
import complexity from './complexity.js';
import debugging from './debugging.js';
import errors from './errors.js';
import git from './git.js';
import separator from './separator.js';
import spacing from './spacing.js';
import etc from './etc.js';

export default { ...beauty, ...complexity, ...debugging, ...errors, ...git, ...separator, ...spacing, ...etc };
