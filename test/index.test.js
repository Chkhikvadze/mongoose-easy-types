var types = require('../src/index').Types;
var expect = require('chai').expect;
var mongoose = require('mongoose');
var assert = require('chai').assert;

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
			},
			amount : types.finance.amount(),
			between : types.date.between(),
			suffixes : types.company.suffixes(),
			price : types.commerce.price(),
			shuffle : types.helpers.shuffle(),
			createCard : types.helpers.createCard(),
			contextualCard : types.helpers.contextualCard(),
			replaceSymbolWithNumber : types.helpers.replaceSymbolWithNumber(),
			number : types.random.number(),
			boolean : types.random.boolean(),
			image : types.image.image(),
			avatar : types.image.avatar(),
			imageUrl : types.image.imageUrl(),
			animals : types.image.animals(),
		});
		var model = mongoose.model("Model", schema);

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

		expect(schema.paths.surName.options.fake).to.exist;
		expect(schema.paths.surName.options.fake()).to.be.a('string');


		var item = model();
		item.firstName = types.name.firstName().fake();
		item.lastName = types.name.lastName().fake();
		item.amount = types.finance.amount().fake();
		item.between = types.date.between().fake();
		item.suffixes = types.company.suffixes().fake();
		item.price = types.commerce.price().fake();
		item.shuffle = types.helpers.shuffle().fake();
		item.createCard = types.helpers.createCard().fake();
		item.contextualCard = types.helpers.contextualCard().fake();
		item.replaceSymbolWithNumber = types.helpers.replaceSymbolWithNumber().fake();
		item.number = types.random.number().fake();
		item.boolean = types.random.boolean().fake();
		item.image = types.image.image().fake();
		item.avatar = types.image.avatar().fake();
		item.imageUrl = types.image.imageUrl().fake();
		item.animals = types.image.animals().fake();

		item.save(function (err, item) {
			assert.isNull(err, 'there was no error');
		});

	});

});
