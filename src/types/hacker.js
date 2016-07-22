var utils = require('../utils');
var faker = require('faker');

/**
 * generates hacker.abbreviation type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} abbreviation type
 */
module.exports.abbreviation = function (attr) {
	return utils.generateType('string', faker.hacker.abbreviation, null, attr);
};

/**
 * generates hacker.adjective type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} adjective type
 */
module.exports.adjective = function (attr) {
	return utils.generateType('string', faker.hacker.adjective, null, attr);
};

/**
 * generates hacker.noun type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} noun type
 */
module.exports.noun = function (attr) {
	return utils.generateType('string', faker.hacker.noun, null, attr);
};

/**
 * generates hacker.verb type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} verb type
 */
module.exports.verb = function (attr) {
	return utils.generateType('string', faker.hacker.verb, null, attr);
};

/**
 * generates hacker.ingverb type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} ingverb type
 */
module.exports.ingverb = function (attr) {
	return utils.generateType('string', faker.hacker.ingverb, null, attr);
};

/**
 * generates hacker.phrase type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} phrase type
 */
module.exports.phrase = function (attr) {
	return utils.generateType('string', faker.hacker.phrase, null, attr);
};
