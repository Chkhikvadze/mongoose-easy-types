var utils = require('../utils');
var faker = require('faker');

/**
 * generates finance.account type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} account type
 */
module.exports.account = function (attr) {
	return utils.generateType('string', faker.finance.account, null, attr);
};

/**
 * generates finance.accountName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} accountName type
 */
module.exports.accountName = function (attr) {
	return utils.generateType('string', faker.finance.accountName, null, attr);
};

/**
 * generates finance.mask type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} mask type
 */
module.exports.mask = function (attr) {
	return utils.generateType('string', faker.finance.mask, null, attr);
};

/**
 * generates finance.amount type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} amount type
 */
module.exports.amount = function (attr) {
	return utils.generateType('string', faker.finance.amount, null, attr);
};

/**
 * generates finance.transactionType type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} transactionType type
 */
module.exports.transactionType = function (attr) {
	return utils.generateType('string', faker.finance.transactionType, null, attr);
};

/**
 * generates finance.currencyCode type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} currencyCode type
 */
module.exports.currencyCode = function (attr) {
	return utils.generateType('string', faker.finance.currencyCode, null, attr);
};

/**
 * generates finance.currencyName type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} currencyName type
 */

module.exports.currencyName = function (attr) {
	return utils.generateType('string', faker.finance.currencyName, null, attr);
};

/**
 * generates finance.currencySymbol type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} currencySymbol type
 */
module.exports.currencySymbol = function (attr) {
	return utils.generateType('string', faker.finance.currencySymbol, null, attr);
};

/**
 * generates finance.bitcoinAddress type
 * @param {Object} attr custom props for mongoose
 * @returns {Object} bitcoinAddress type
 */
module.exports.bitcoinAddress = function (attr) {
	return utils.generateType('string', faker.finance.bitcoinAddress, null, attr);
};
