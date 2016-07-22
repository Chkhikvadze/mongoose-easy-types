var utils = require('../utils');
var faker = require('faker');

/**
 * generates phone.phoneNumber type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} phoneNumber type
 */
module.exports.phoneNumber = function (attr) {
	return utils.generateType('string', faker.phone.phoneNumber, null, attr);
};

/**
 * generates phone.phoneNumberFormat type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} phoneNumberFormat type
 */
module.exports.phoneNumberFormat = function (attr) {
	return utils.generateType('string', faker.phone.phoneNumberFormat, null, attr);
};

/**
 * generates phone.phoneFormats type
 * @param {Object} attr phoneFormats props for mongoose
 * @returns {Object} phoneFormats type
 */
module.exports.phoneFormats = function (attr) {
	return utils.generateType('string', faker.phone.phoneFormats, null, attr);
};
