var utils = require('../utils');
var faker = require('faker');

/**
 * generates name.firstName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} firstName type
 */
module.exports.firstName = function (attr) {
	return utils.generateType('string', faker.name.findName, null, attr);
};
