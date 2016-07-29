var types = require('../../src').Types;
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

	it('should Schema field exist', function (done) {

		var schema = mongoose.Schema({
			firstName: types.name.firstName({}),
			lastName: types.name.firstName({required: true}),
			surName: {
				type: types.name.firstName().type,
				fakePath: types.name.firstName().fakePath
			},
			amount: types.finance.amount(),
			between: types.date.between(),
			suffixes: types.company.suffixes(),
			price: types.commerce.price(),
			shuffle: types.helpers.shuffle(),
			createCard: types.helpers.createCard(),
			contextualCard: types.helpers.contextualCard(),
			replaceSymbolWithNumber: types.helpers.replaceSymbolWithNumber(),
			number: types.random.number(),
			boolean: types.random.boolean(),
			image: types.image.image(),
			avatar: types.image.avatar(),
			imageUrl: types.image.imageUrl(),
			animals: types.image.animals()
		});
		var model = mongoose.model("FakeModel", schema);

		expect(schema.paths.firstName.options.type).to.exist;
		expect(schema.paths.firstName.options.type).to.equal('string');

		expect(schema.paths.firstName.options.fakePath).to.exist;
		expect(schema.paths.firstName.options.fakePath()).to.be.a('string');


		expect(schema.paths.lastName.options.type).to.exist;
		expect(schema.paths.lastName.options.type).to.equal('string');

		expect(schema.paths.lastName.options.fakePath).to.exist;
		expect(schema.paths.lastName.options.fakePath()).to.be.a('string');

		expect(schema.paths.lastName.options.required).to.exist;
		expect(schema.paths.lastName.options.required).to.equal(true);


		expect(schema.paths.surName.options.type).to.exist;
		expect(schema.paths.surName.options.type).to.equal('string');

		expect(schema.paths.surName.options.fakePath).to.exist;
		expect(schema.paths.surName.options.fakePath()).to.be.a('string');

		expect(schema.paths.surName.options.fakePath).to.exist;
		expect(schema.paths.surName.options.fakePath()).to.be.a('string');


		var item = model();
		item.firstName = types.name.firstName().fakePath();
		item.lastName = types.name.lastName().fakePath();
		item.amount = types.finance.amount().fakePath();
		item.between = types.date.between().fakePath();
		item.suffixes = types.company.suffixes().fakePath();
		item.price = types.commerce.price().fakePath();
		item.shuffle = types.helpers.shuffle().fakePath();
		item.createCard = types.helpers.createCard().fakePath();
		item.contextualCard = types.helpers.contextualCard().fakePath();
		item.replaceSymbolWithNumber = types.helpers.replaceSymbolWithNumber().fakePath();
		item.number = types.random.number().fakePath();
		item.boolean = types.random.boolean().fakePath();
		item.image = types.image.image().fakePath();
		item.avatar = types.image.avatar().fakePath();
		item.imageUrl = types.image.imageUrl().fakePath();
		item.animals = types.image.animals().fakePath();
		item.latitude = types.address.latitude().fakePath();
		item.longitude = types.address.longitude().fakePath();


		item.save(function (err, dbItem) {
			expect(err).to.not.exist;

			assert.isNotNull(dbItem);
			assert.property(dbItem, 'firstName');
			assert.property(dbItem, 'lastName');
			assert.property(dbItem, 'amount');
			assert.property(dbItem, 'between');
			assert.property(dbItem, 'suffixes');
			assert.property(dbItem, 'price');
			assert.property(dbItem, 'createCard');
			assert.property(dbItem, 'contextualCard');
			assert.property(dbItem, 'replaceSymbolWithNumber');
			assert.property(dbItem, 'number');
			assert.property(dbItem, 'boolean');
			assert.property(dbItem, 'shuffle');
			assert.property(dbItem, 'image');
			assert.property(dbItem, 'avatar');
			assert.property(dbItem, 'imageUrl');
			assert.property(dbItem, 'animals');

			done();
		});
	});
});
