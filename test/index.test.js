var types = require('../src/index').Types;
var expect = require('chai').expect;

describe('tests for module types', function () {
	"use strict";

	it('should generate all types for name', function () {
		expect(types.name).to.exist;
		expect(types.name.firstName).to.exist;
		expect(types.name).to.respondTo('firstName');
	});

});
