var types = require('../../src/types/name');
var expect = require('chai').expect;


describe('tests for name types', function () {
	"use strict";

	it('should generate firstName type', function () {
		var firstName = types.firstName({required: true});

		expect(firstName.type).to.exist;
		expect(firstName.type).to.equal('string');

		expect(firstName.fake).to.exist;
		expect(firstName).to.respondTo('fake');
		expect(firstName.fake()).to.be.a('string');

		expect(firstName.required).to.exist;
		expect(firstName.required).to.be.true;
	});

});
