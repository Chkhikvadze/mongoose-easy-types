var utils = require('../utils');
var faker = require('faker');

/**
 * generates commerce.color type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} color type
 */
module.exports.color = function (attr) {
	return utils.generateType('string', faker.commerce.color, null, attr);
};

/**
 * generates commerce.department type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} department type
 */
module.exports.department = function (attr) {
	return utils.generateType('string', faker.commerce.department, null, attr);
};

/**
 * generates commerce.productName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} productName type
 */
module.exports.productName = function (attr) {
	return utils.generateType('string', faker.commerce.productName, null, attr);
};

/**
 * generates commerce.price type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} price type
 */
module.exports.price = function (attr) {
	return utils.generateType('number', utils.changeType(faker.commerce.price, 'number'), null, attr);
};

/**
 * generates commerce.productAdjective type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} productAdjective type
 */
module.exports.productAdjective = function (attr) {
	return utils.generateType('string', faker.commerce.productAdjective, null, attr);
};

/**
 * generates commerce.productMaterial type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} productMaterial type
 */
module.exports.productMaterial = function (attr) {
	return utils.generateType('string', faker.commerce.productMaterial, null, attr);
};

/**
 * generates commerce.product type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} product type
 */

module.exports.product = function (attr) {
	return utils.generateType('string', faker.commerce.product, null, attr);
};
