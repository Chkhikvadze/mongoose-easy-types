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
