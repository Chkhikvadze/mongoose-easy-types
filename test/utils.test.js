var utils = require('../src/utils');
var expect = require('chai').expect;

describe('tests for utils', function () {
	"use strict";

	var fakerMock = {
		fake: function () {
			return 'fake'
		}
	};

	it('should generate type', function () {
		var type = utils.generateType('string', fakerMock.fake, null, {});

		expect(type.type).to.exist;
		expect(type.type).to.equal('string');

		expect(type.fake).to.exist;
		expect(type).to.respondTo('fake');
		expect(type.fake()).to.be.a('string');
	});


	it('should generate type with custom attr', function () {

		var type = utils.generateType('int', fakerMock.fake, null, {required: false});

		expect(type.type).to.exist;
		expect(type.type).to.equal('int');

		expect(type.fake).to.exist;
		expect(type).to.respondTo('fake');
		expect(type.fake()).to.be.a('string');

		expect(type.required).to.exist;
		expect(type.required).to.be.not.true;
	});

});
