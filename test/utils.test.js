var utils = require('../src/utils');
var expect = require('chai').expect;

describe('tests for utils', function () {
	"use strict";

	var fakerMock = {
		fakePath: function () {
			return 'fakePath'
		}
	};

	it('should generate type', function () {
		var type = utils.generateType('string', fakerMock.fakePath, null, {});

		expect(type.type).to.exist;
		expect(type.type).to.equal('string');

		expect(type.fakePath).to.exist;
		expect(type).to.respondTo('fakePath');
		expect(type.fakePath()).to.be.a('string');
	});


	it('should generate type with custom attr', function () {

		var type = utils.generateType('int', fakerMock.fakePath, null, {required: false});

		expect(type.type).to.exist;
		expect(type.type).to.equal('int');

		expect(type.fakePath).to.exist;
		expect(type).to.respondTo('fakePath');
		expect(type.fakePath()).to.be.a('string');

		expect(type.required).to.exist;
		expect(type.required).to.be.not.true;
	});

});
