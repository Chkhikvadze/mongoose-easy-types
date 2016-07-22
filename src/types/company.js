var utils = require('../utils');
var faker = require('faker');

/**
 * generates company.suffixes type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} suffixes type
 */
module.exports.suffixes = function (attr) {
	return utils.generateType('string', faker.company.suffixes, null, attr);
};

/**
 * generates company.companyName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} companyName type
 */
module.exports.companyName = function (attr) {
	return utils.generateType('string', faker.company.companyName, null, attr);
};

/**
 * generates company.companySuffix type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} companySuffix type
 */
module.exports.companySuffix = function (attr) {
	return utils.generateType('string', faker.company.companySuffix, null, attr);
};

/**
 * generates company.catchPhrase type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} catchPhrase type
 */
module.exports.catchPhrase = function (attr) {
	return utils.generateType('string', faker.company.catchPhrase, null, attr);
};

/**
 * generates company.bs type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} bs type
 */
module.exports.bs = function (attr) {
	return utils.generateType('string', faker.company.bs, null, attr);
};

/**
 * generates company.catchPhraseAdjective type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} catchPhraseAdjective type
 */
module.exports.catchPhraseAdjective = function (attr) {
	return utils.generateType('string', faker.company.catchPhraseAdjective, null, attr);
};

/**
 * generates company.catchPhraseDescriptor type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} catchPhraseDescriptor type
 */

module.exports.catchPhraseDescriptor = function (attr) {
	return utils.generateType('string', faker.company.catchPhraseDescriptor, null, attr);
};

/**
 * generates company.catchPhraseNoun type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} catchPhraseNoun type
 */
module.exports.catchPhraseNoun = function (attr) {
	return utils.generateType('string', faker.company.catchPhraseNoun, null, attr);
};

/**
 * generates company.bsAdjective type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} bsAdjective type
 */
module.exports.bsAdjective = function (attr) {
	return utils.generateType('string', faker.company.bsAdjective, null, attr);
};

/**
 * generates company.bsBuzz type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} bsBuzz type
 */
module.exports.bsBuzz = function (attr) {
	return utils.generateType('string', faker.company.bsBuzz, null, attr);
};

/**
 * generates company.bsNoun type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} bsNoun type
 */
module.exports.bsNoun = function (attr) {
	return utils.generateType('string', faker.company.bsNoun, null, attr);
};
