var utils = require('../utils');
var faker = require('faker');

/**
 * generates helpers.randomize type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} randomize type
 */
module.exports.randomize = function (attr) {
	return utils.generateType('string', faker.helpers.randomize, null, attr);
};

/**
 * generates helpers.slugify type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} slugify type
 */
module.exports.slugify = function (attr) {
	return utils.generateType('string', faker.helpers.slugify, null, attr);
};

/**
 * generates helpers.replaceSymbolWithNumber type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} replaceSymbolWithNumber type
 */
module.exports.replaceSymbolWithNumber = function (attr) {
	return utils.generateType('string', faker.helpers.replaceSymbolWithNumber, null, attr);
};

/**
 * generates helpers.replaceSymbols type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} replaceSymbols type
 */
module.exports.replaceSymbols = function (attr) {
	return utils.generateType('string', faker.helpers.replaceSymbols, null, attr);
};

/**
 * generates helpers.shuffle type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} shuffle type
 */
module.exports.shuffle = function (attr) {
	return utils.generateType('string', faker.helpers.shuffle, null, attr);
};

/**
 * generates helpers.mustache type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} mustache type
 */
module.exports.mustache = function (attr) {
	return utils.generateType('string', faker.helpers.mustache, null, attr);
};

/**
 * generates helpers.createCard type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} createCard type
 */

module.exports.createCard = function (attr) {
	return utils.generateType('string', faker.helpers.createCard, null, attr);
};

/**
 * generates helpers.contextualCard type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} contextualCard type
 */
module.exports.contextualCard = function (attr) {
	return utils.generateType('string', faker.helpers.contextualCard, null, attr);
};

/**
 * generates helpers.userCard type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} userCard type
 */
module.exports.userCard = function (attr) {
	return utils.generateType('string', faker.helpers.userCard, null, attr);
};

/**
 * generates helpers.createTransaction type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} createTransaction type
 */
module.exports.createTransaction = function (attr) {
	return utils.generateType('string', faker.helpers.createTransaction, null, attr);
};
