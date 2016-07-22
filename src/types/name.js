var utils = require('../utils');
var faker = require('faker');

/**
 * generates name.firstName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} firstName type
 */
module.exports.firstName = function (attr) {
	return utils.generateType('string', faker.name.firstName, null, attr);
};

/**
 * generates name.lastName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} lastName type
 */
module.exports.lastName = function (attr) {
	return utils.generateType('string', faker.name.lastName, null, attr);
};

/**
 * generates name.findName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} findName type
 */
module.exports.findName = function (attr) {
	return utils.generateType('string', faker.name.findName, null, attr);
};

/**
 * generates name.jobTitle type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} jobTitle type
 */
module.exports.jobTitle = function (attr) {
	return utils.generateType('string', faker.name.jobTitle, null, attr);
};

/**
 * generates name.prefix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} prefix type
 */
module.exports.prefix = function (attr) {
	return utils.generateType('string', faker.name.prefix, null, attr);
};

/**
 * generates name.suffix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} suffix type
 */
module.exports.suffix = function (attr) {
	return utils.generateType('string', faker.name.suffix, null, attr);
};

/**
 * generates name.title type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} title type
 */

module.exports.title = function (attr) {
	return utils.generateType('string', faker.name.title, null, attr);
};

/**
 * generates name.jobDescriptor type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} jobDescriptor type
 */
module.exports.jobDescriptor = function (attr) {
	return utils.generateType('string', faker.name.jobDescriptor, null, attr);
};

/**
 * generates name.title type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} title type
 */
module.exports.title = function (attr) {
	return utils.generateType('string', faker.name.title, null, attr);
};

/**
 * generates name.jobArea type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} jobArea type
 */
module.exports.jobArea = function (attr) {
	return utils.generateType('string', faker.name.jobArea, null, attr);
};

/**
 * generates name.jobType type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} jobType type
 */
module.exports.jobType = function (attr) {
	return utils.generateType('string', faker.name.jobType, null, attr);
};
