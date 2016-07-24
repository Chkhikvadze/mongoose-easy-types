var types = require('../../src/types/phone');
var expect = require('chai').expect;


describe('tests for phone types', function () {
	"use strict";

	it('should generate firstName type', function () {
		var phoneNumber = types.phoneNumber({required: true});

		expect(phoneNumber.type).to.exist;
		expect(phoneNumber.type).to.equal('string');

		expect(phoneNumber.fakePath).to.exist;
		expect(phoneNumber).to.respondTo('fakePath');
		expect(phoneNumber.fakePath()).to.be.a('string');

		expect(phoneNumber.required).to.exist;
		expect(phoneNumber.required).to.be.true;
	});

	it('should generate phoneNumberFormat type', function () {
		var phoneNumberFormat = types.phoneNumberFormat({required: true});

		expect(phoneNumberFormat.type).to.exist;
		expect(phoneNumberFormat.type).to.equal('string');

		expect(phoneNumberFormat.fakePath).to.exist;
		expect(phoneNumberFormat).to.respondTo('fakePath');
		expect(phoneNumberFormat.fakePath()).to.be.a('string');

		expect(phoneNumberFormat.required).to.exist;
		expect(phoneNumberFormat.required).to.be.true;
	});

	it('should generate phoneFormats type', function () {
		var phoneFormats = types.phoneFormats({required: true});

		expect(phoneFormats.type).to.exist;
		expect(phoneFormats.type).to.equal('string');

		expect(phoneFormats.fakePath).to.exist;
		expect(phoneFormats).to.respondTo('fakePath');
		expect(phoneFormats.fakePath()).to.be.a('string');

		expect(phoneFormats.required).to.exist;
		expect(phoneFormats.required).to.be.true;
	});
});
