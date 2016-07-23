var _ = require('lodash');

/**
 * helper function to generate type object
 * @param {string} type
 * @param {Function} fake
 * @param {Function} validation
 * @param {Object} attr
 * @returns {Object} generated type
 */
module.exports.generateType = function (type, fake, validation, attr) {
	return _.assign({
		type: type,
		fake: fake,
		validation: validation
	}, attr);
};

/**
 * changes types with compatability to mongoose
 * @param func
 * @param {string} type mongoose type names only
 * @returns {Function} converter function
 */
module.exports.changeType = function (func, type) {
	return function() {
		type = type.toLowerCase();

		if (type === 'number') {
			return Number(func());
		} else {
			return new Error('not a valid mongoose type');
		}
	}
};
