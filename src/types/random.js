var utils = require('../utils');
var faker = require('faker');

/**
 * generates random.number type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} number type
 */
module.exports.number = function (attr) {
	return utils.generateType('number', faker.random.number, null, attr);
};

/**
 * generates random.arrayElement type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} arrayElement type
 */
module.exports.arrayElement = function (attr) {
	return utils.generateType('string', faker.random.arrayElement, null, attr);
};

/**
 * generates random.objectElement type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} objectElement type
 */
module.exports.objectElement = function (attr) {
	return utils.generateType('string', faker.random.objectElement, null, attr);
};

// /**
//  * generates random.uuid type
//  * @param {Object} attr custom props for mongoose
//  * @returns {Object} uuid type
//  */
// module.exports.uuid = function (attr) {
// 	return utils.generateType('string', faker.random.uuid, null, attr);
// };

/**
 * generates random.boolean type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} boolean type
 */
module.exports.boolean = function (attr) {
	return utils.generateType('boolean', faker.random.boolean, null, attr);
};

/**
 * generates random.word type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} word type
 */
module.exports.word = function (attr) {
	return utils.generateType('string', faker.random.word, null, attr);
};

/**
 * generates random.words type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} words type
 */

module.exports.words = function (attr) {
	if (attr.asArray){
		return utils.generateType([], utils.changeTypeAsArray(faker.random.words, ' '), null, attr);
	}else{
		return utils.generateType('string', faker.random.words, null, attr);
	}
};

/**
 * generates random.image type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} image type
 */
module.exports.image = function (attr) {
	return utils.generateType('string', faker.random.image, null, attr);
};

/**
 * generates random.locale type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} locale type
 */
module.exports.locale = function (attr) {
	return utils.generateType('string', faker.random.locale, null, attr);
};

/**
 * generates random.alphaNumeric type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} alphaNumeric type
 */
module.exports.alphaNumeric = function (attr) {
	return utils.generateType('string', faker.random.alphaNumeric, null, attr);
};
