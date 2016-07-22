var utils = require('../utils');
var faker = require('faker');

/**
 * generates internet.avatar type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} avatar type
 */
module.exports.avatar = function (attr) {
	return utils.generateType('string', faker.internet.avatar, null, attr);
};

/**
 * generates internet.email type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} email type
 */
module.exports.email = function (attr) {
	return utils.generateType('string', faker.internet.email, null, attr);
};

/**
 * generates internet.exampleEmail type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} exampleEmail type
 */
module.exports.exampleEmail = function (attr) {
	return utils.generateType('string', faker.internet.exampleEmail, null, attr);
};

/**
 * generates internet.userName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} userName type
 */
module.exports.userName = function (attr) {
	return utils.generateType('string', faker.internet.userName, null, attr);
};

/**
 * generates internet.protocol type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} protocol type
 */
module.exports.protocol = function (attr) {
	return utils.generateType('string', faker.internet.protocol, null, attr);
};

/**
 * generates internet.url type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} url type
 */
module.exports.url = function (attr) {
	return utils.generateType('string', faker.internet.url, null, attr);
};

/**
 * generates internet.domainName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} domainName type
 */

module.exports.domainName = function (attr) {
	return utils.generateType('string', faker.internet.domainName, null, attr);
};

/**
 * generates internet.domainSuffix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} domainSuffix type
 */
module.exports.domainSuffix = function (attr) {
	return utils.generateType('string', faker.internet.domainSuffix, null, attr);
};

/**
 * generates internet.domainWord type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} domainWord type
 */
module.exports.domainWord = function (attr) {
	return utils.generateType('string', faker.internet.domainWord, null, attr);
};

/**
 * generates internet.domainWord type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} domainWord type
 */
module.exports.domainWord = function (attr) {
	return utils.generateType('string', faker.internet.domainWord, null, attr);
};

/**
 * generates internet.ip type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} ip type
 */
module.exports.ip = function (attr) {
	return utils.generateType('string', faker.internet.ip, null, attr);
};

/**
 * generates internet.userAgent type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} userAgent type
 */
module.exports.userAgent = function (attr) {
	return utils.generateType('string', faker.internet.userAgent, null, attr);
};

/**
 * generates internet.color type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} color type
 */
module.exports.color = function (attr) {
	return utils.generateType('string', faker.internet.color, null, attr);
};

/**
 * generates internet.mac type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} mac type
 */
module.exports.mac = function (attr) {
	return utils.generateType('string', faker.internet.mac, null, attr);
};

/**
 * generates internet.password type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} password type
 */
module.exports.password = function (attr) {
	return utils.generateType('string', faker.internet.password, null, attr);
};
