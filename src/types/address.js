var utils = require('../utils');
var faker = require('faker');

/**
 * generates address.zipCode type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} zipCode type
 */
module.exports.zipCode = function (attr) {
	return utils.generateType('string', faker.address.zipCode, null, attr);
};

/**
 * generates address.city type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} city type
 */
module.exports.city = function (attr) {
	return utils.generateType('string', faker.address.city, null, attr);
};

/**
 * generates address.cityPrefix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} cityPrefix type
 */
module.exports.cityPrefix = function (attr) {
	return utils.generateType('string', faker.address.cityPrefix, null, attr);
};

/**
 * generates address.citySuffix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} citySuffix type
 */
module.exports.citySuffix = function (attr) {
	return utils.generateType('string', faker.address.citySuffix, null, attr);
};

/**
 * generates address.streetName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} streetName type
 */
module.exports.streetName = function (attr) {
	return utils.generateType('string', faker.address.streetName, null, attr);
};

/**
 * generates address.streetAddress type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} streetAddress type
 */
module.exports.streetAddress = function (attr) {
	return utils.generateType('string', faker.address.streetAddress, null, attr);
};

/**
 * generates address.streetSuffix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} streetSuffix type
 */

module.exports.streetSuffix = function (attr) {
	return utils.generateType('string', faker.address.streetSuffix, null, attr);
};

/**
 *
 * generates address.streetPrefix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} streetPrefix type
 */

module.exports.streetPrefix = function (attr) {
	return utils.generateType('string', faker.address.streetPrefix, null, attr);
};

/**
 * generates address.secondaryAddress type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} secondaryAddress type
 */
module.exports.secondaryAddress = function (attr) {
	return utils.generateType('string', faker.address.secondaryAddress, null, attr);
};

/**
 * generates address.county type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} county type
 */
module.exports.county = function (attr) {
	return utils.generateType('string', faker.address.county, null, attr);
};

/**
 * generates address.country type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} country type
 */
module.exports.country = function (attr) {
	return utils.generateType('string', faker.address.country, null, attr);
};

/**
 * generates address.countryCode type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} countryCode type
 */
module.exports.countryCode = function (attr) {
	return utils.generateType('string', faker.address.countryCode, null, attr);
};

/**
 * generates address.state type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} state type
 */
module.exports.state = function (attr) {
	return utils.generateType('string', faker.address.state, null, attr);
};

/**
 * generates address.stateAbbr type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} stateAbbr type
 */
module.exports.stateAbbr = function (attr) {
	return utils.generateType('string', faker.address.stateAbbr, null, attr);
};

/**
 * generates address.latitude type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} latitude type
 */
module.exports.latitude = function (attr) {
	return utils.generateType('number', utils.changeType(faker.address.latitude, 'number'), null, attr);
};

/**
 * generates address.longitude type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} longitude type
 */
module.exports.longitude = function (attr) {
	return utils.generateType('number', utils.changeType(faker.address.longitude, 'number'), null, attr);
};
