var utils = require('../utils');
var faker = require('faker');

/**
 * generates system.fileName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} fileName type
 */
module.exports.fileName = function (attr) {
	return utils.generateType('string', faker.system.fileName, null, attr);
};

/**
 * generates system.commonFileName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} commonFileName type
 */
module.exports.commonFileName = function (attr) {
	return utils.generateType('string', faker.system.commonFileName, null, attr);
};

/**
 * generates system.commonFileName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} commonFileName type
 */
module.exports.commonFileName = function (attr) {
	return utils.generateType('string', faker.system.commonFileName, null, attr);
};

/**
 * generates system.mimeType type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} mimeType type
 */
module.exports.mimeType = function (attr) {
	return utils.generateType('string', faker.system.mimeType, null, attr);
};

/**
 * generates system.commonFileType type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} commonFileType type
 */
module.exports.commonFileType = function (attr) {
	return utils.generateType('string', faker.system.commonFileType, null, attr);
};

/**
 * generates system.commonFileExt type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} commonFileExt type
 */
module.exports.commonFileExt = function (attr) {
	return utils.generateType('string', faker.system.commonFileExt, null, attr);
};

/**
 * generates system.fileType type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} fileType type
 */

module.exports.fileType = function (attr) {
	return utils.generateType('string', faker.system.fileType, null, attr);
};

/**
 * generates system.fileExt type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} fileExt type
 */
module.exports.fileExt = function (attr) {
	return utils.generateType('string', faker.system.fileExt, null, attr);
};

/**
 * generates system.directoryPath type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} directoryPath type
 */
module.exports.directoryPath = function (attr) {
	return utils.generateType('string', faker.system.directoryPath, null, attr);
};

/**
 * generates system.filePath type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} filePath type
 */
module.exports.filePath = function (attr) {
	return utils.generateType('string', faker.system.filePath, null, attr);
};

/**
 * generates system.semver type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} semver type
 */
module.exports.semver = function (attr) {
	return utils.generateType('string', faker.system.semver, null, attr);
};
