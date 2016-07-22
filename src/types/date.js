var utils = require('../utils');
var faker = require('faker');

/**
 * generates date.past type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} past type
 */
module.exports.past = function (attr) {
	return utils.generateType('string', faker.date.past, null, attr);
};

/**
 * generates date.future type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} future type
 */
module.exports.future = function (attr) {
	return utils.generateType('string', faker.date.future, null, attr);
};

/**
 * generates date.between type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} between type
 */
module.exports.between = function (attr) {
	return utils.generateType('string', faker.date.between, null, attr);
};

/**
 * generates date.recent type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} recent type
 */
module.exports.recent = function (attr) {
	return utils.generateType('string', faker.date.recent, null, attr);
};

/**
 * generates date.month type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} month type
 */
module.exports.month = function (attr) {
	return utils.generateType('string', faker.date.month, null, attr);
};

/**
 * generates date.weekday type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} weekday type
 */
module.exports.weekday = function (attr) {
	return utils.generateType('string', faker.date.weekday, null, attr);
};
