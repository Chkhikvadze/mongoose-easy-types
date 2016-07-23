var utils = require('../utils');
var faker = require('faker');

/**
 * generates image.image type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} image type
 */
module.exports.image = function (attr) {
	return utils.generateType('string', faker.image.image, null, attr);
};

/**
 * generates image.avatar type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} avatar type
 */
module.exports.avatar = function (attr) {
	return utils.generateType('string', faker.image.avatar, null, attr);
};

/**
 * generates image.imageUrl type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} imageUrl type
 */
module.exports.imageUrl = function (attr) {
	return utils.generateType('string', faker.image.imageUrl, null, attr);
};

/**
 * generates image.abstract type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} abstract type
 */
module.exports.abstract = function (attr) {
	return utils.generateType('string', faker.image.abstract, null, attr);
};

/**
 * generates image.abstract type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} abstract type
 */
module.exports.animals = function (attr) {
	return utils.generateType('string', faker.image.animals, null, attr);
};

/**
 * generates image.business type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} business type
 */
module.exports.business = function (attr) {
	return utils.generateType('string', faker.image.business, null, attr);
};

/**
 * generates image.cats type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} cats type
 */
module.exports.cats = function (attr) {
	return utils.generateType('string', faker.image.cats, null, attr);
};

/**
 * generates image.city type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} city type
 */

module.exports.city = function (attr) {
	return utils.generateType('string', faker.image.city, null, attr);
};

/**
 * generates image.food type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} food type
 */
module.exports.food = function (attr) {
	return utils.generateType('string', faker.image.food, null, attr);
};

/**
 * generates image.nightlife type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} nightlife type
 */
module.exports.nightlife = function (attr) {
	return utils.generateType('string', faker.image.nightlife, null, attr);
};

/**
 * generates image.fashion type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} fashion type
 */
module.exports.fashion = function (attr) {
	return utils.generateType('string', faker.image.fashion, null, attr);
};

/**
 * generates image.people type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} people type
 */
module.exports.people = function (attr) {
	return utils.generateType('string', faker.image.people, null, attr);
};

/**
 * generates image.nature type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} nature type
 */
module.exports.nature = function (attr) {
	return utils.generateType('string', faker.image.nature, null, attr);
};

/**
 * generates image.sports type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} sports type
 */
module.exports.sports = function (attr) {
	return utils.generateType('string', faker.image.sports, null, attr);
};

/**
 * generates image.technics type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} technics type
 */
module.exports.technics = function (attr) {
	return utils.generateType('string', faker.image.people, null, attr);
};

/**
 * generates image.transport type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} transport type
 */
module.exports.transport = function (attr) {
	return utils.generateType('string', faker.image.transport, null, attr);
};
