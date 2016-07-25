var utils = require('../utils');
var faker = require('faker');

/**
 * generates lorem.word type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} word type
 */
module.exports.word = function (attr) {
	return utils.generateType('string', faker.lorem.word, null, attr);
};

/**
 * generates lorem.words type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} words type
 */
module.exports.words = function (attr) {
	if (attr.asArray){
		return utils.generateType([], utils.changeTypeAsArray(faker.lorem.words, ' '), null, attr);
	}else{
		return utils.generateType('string', faker.lorem.words, null, attr);
	}
};

/**
 * generates lorem.sentence type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} sentence type
 */
module.exports.sentence = function (attr) {
	return utils.generateType('string', faker.lorem.sentence, null, attr);
};

/**
 * generates lorem.sentences type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} sentences type
 */
module.exports.sentences = function (attr) {
	if (attr.asArray){
		return utils.generateType([], utils.changeTypeAsArray(faker.lorem.sentences, '. '), null, attr);
	}else{
		return utils.generateType('string', faker.lorem.sentences, null, attr);
	}
};

/**
 * generates lorem.paragraph type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} paragraph type
 */
module.exports.paragraph = function (attr) {
	return utils.generateType('string', faker.lorem.paragraph, null, attr);
};

/**
 * generates lorem.paragraphs type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} paragraphs type
 */
module.exports.paragraphs = function (attr) {
	return utils.generateType('string', faker.lorem.paragraphs, null, attr);
};

/**
 * generates lorem.text type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} text type
 */
module.exports.text = function (attr) {
	return utils.generateType('string', faker.lorem.text, null, attr);
};

/**
 * generates lorem.lines type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} lines type
 */

module.exports.lines = function (attr) {
	if (attr.asArray){
		return utils.generateType([], utils.changeTypeAsArray(faker.lorem.lines, /\r?\n/), null, attr);
	}else{
		return utils.generateType('string', faker.lorem.lines, null, attr);
	}
};
