var types = require('../src/index').Types;
var expect = require('chai').expect;
var mongoose = require('mongoose');

describe('tests for module types', function () {
	"use strict";

	it('should generate all types for name', function () {
		expect(types.name).to.exist;
		expect(types.name.firstName).to.exist;
		expect(types.name).to.respondTo('firstName');
	});

	it('should Schema field exist', function () {

		var schema = mongoose.Schema({
			firstName : types.name.firstName({}),
			lastName : types.name.firstName({require : true}),
			surName : {
				type : types.name.firstName().type,
				fake : types.name.firstName().fake
			}
		});

		expect(schema.paths.firstName.options.type).to.exist;
		expect(schema.paths.firstName.options.type).to.equal('string');

		expect(schema.paths.firstName.options.fake).to.exist;
		expect(schema.paths.firstName.options.fake()).to.be.a('string');


		expect(schema.paths.lastName.options.type).to.exist;
		expect(schema.paths.lastName.options.type).to.equal('string');

		expect(schema.paths.lastName.options.fake).to.exist;
		expect(schema.paths.lastName.options.fake()).to.be.a('string');

		expect(schema.paths.lastName.options.require).to.exist;
		expect(schema.paths.lastName.options.require).to.equal(true);


		expect(schema.paths.surName.options.type).to.exist;
		expect(schema.paths.surName.options.type).to.equal('string');

		expect(schema.paths.surName.options.fake).to.exist;
		expect(schema.paths.surName.options.fake()).to.be.a('string');

	});

});
