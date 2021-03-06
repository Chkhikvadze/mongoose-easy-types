var types = require('../../../src/types/finance');
var expect = require('chai').expect;


describe('tests for finance types', function () {
	"use strict";

	it('should generate account type', function () {
		var account = types.account({required: true});

		expect(account.type).to.exist;
		expect(account.type).to.equal('string');

		expect(account.fakePath).to.exist;
		expect(account).to.respondTo('fakePath');
		expect(account.fakePath()).to.be.a('string');

		expect(account.required).to.exist;
		expect(account.required).to.be.true;
	});

	it('should generate accountName type', function () {
		var accountName = types.accountName({required: true});

		expect(accountName.type).to.exist;
		expect(accountName.type).to.equal('string');

		expect(accountName.fakePath).to.exist;
		expect(accountName).to.respondTo('fakePath');
		expect(accountName.fakePath()).to.be.a('string');

		expect(accountName.required).to.exist;
		expect(accountName.required).to.be.true;
	});

	it('should generate mask type', function () {
		var mask = types.mask({required: true});

		expect(mask.type).to.exist;
		expect(mask.type).to.equal('string');

		expect(mask.fakePath).to.exist;
		expect(mask).to.respondTo('fakePath');
		expect(mask.fakePath()).to.be.a('string');

		expect(mask.required).to.exist;
		expect(mask.required).to.be.true;
	});

	it('should generate amount type', function () {
		var amount = types.amount({required: true});

		expect(amount.type).to.exist;
		expect(amount.type).to.equal('number');

		expect(amount.fakePath).to.exist;
		expect(amount).to.respondTo('fakePath');
		expect(amount.fakePath()).to.be.a('number');

		expect(amount.required).to.exist;
		expect(amount.required).to.be.true;
	});

	it('should generate transactionType type', function () {
		var transactionType = types.transactionType({required: true});

		expect(transactionType.type).to.exist;
		expect(transactionType.type).to.equal('string');

		expect(transactionType.fakePath).to.exist;
		expect(transactionType).to.respondTo('fakePath');
		expect(transactionType.fakePath()).to.be.a('string');

		expect(transactionType.required).to.exist;
		expect(transactionType.required).to.be.true;
	});

	it('should generate title type', function () {
		var currencyCode = types.currencyCode({required: true});

		expect(currencyCode.type).to.exist;
		expect(currencyCode.type).to.equal('string');

		expect(currencyCode.fakePath).to.exist;
		expect(currencyCode).to.respondTo('fakePath');
		expect(currencyCode.fakePath()).to.be.a('string');

		expect(currencyCode.required).to.exist;
		expect(currencyCode.required).to.be.true;
	});

	it('should generate jobDescriptor type', function () {
		var currencyName = types.currencyName({required: true});

		expect(currencyName.type).to.exist;
		expect(currencyName.type).to.equal('string');

		expect(currencyName.fakePath).to.exist;
		expect(currencyName).to.respondTo('fakePath');
		expect(currencyName.fakePath()).to.be.a('string');

		expect(currencyName.required).to.exist;
		expect(currencyName.required).to.be.true;
	});

	it('should generate currencySymbol type', function () {
		var currencySymbol = types.currencySymbol({required: true});

		expect(currencySymbol.type).to.exist;
		expect(currencySymbol.type).to.equal('string');

		expect(currencySymbol.fakePath).to.exist;
		expect(currencySymbol).to.respondTo('fakePath');
		expect(currencySymbol.fakePath()).to.be.a('string');

		expect(currencySymbol.required).to.exist;
		expect(currencySymbol.required).to.be.true;
	});

	it('should generate bitcoinAddress type', function () {
		var bitcoinAddress = types.bitcoinAddress({required: true});

		expect(bitcoinAddress.type).to.exist;
		expect(bitcoinAddress.type).to.equal('string');

		expect(bitcoinAddress.fakePath).to.exist;
		expect(bitcoinAddress).to.respondTo('fakePath');
		expect(bitcoinAddress.fakePath()).to.be.a('string');

		expect(bitcoinAddress.required).to.exist;
		expect(bitcoinAddress.required).to.be.true;
	});

});
