var types = require('../../src').Types;
var fakePlugin = require('../../src').Plugin;
var expect = require('chai').expect;
var assert = require('chai').assert;
var mongoose = require('mongoose');

describe('tests for fake plugin', function () {
	var Model;

	before(function () {
		var schema = mongoose.Schema({
			firstName: types.name.firstName({}),
			lastName: types.name.firstName({required: true}),
			surName: {
				type: types.name.firstName().type,
				fakePath: types.name.firstName().fakePath
			},
			contact: {
				customer: {
					supplier: {
						firstName: types.name.firstName({}),
						lastName: types.name.firstName({required: true})
					},

					firstName: types.name.firstName({}),
					lastName: types.name.firstName({required: true})
				},
				firstName: types.name.firstName({}),
				lastName: types.name.firstName({required: true})
			},
			amount: types.finance.amount(),
			suffixes: types.company.suffixes(),
			price: types.commerce.price(),
			number: types.random.number(),
			boolean: types.random.boolean(),
			image: types.image.image(),
			avatar: types.image.avatar(),
			imageUrl: types.image.imageUrl(),
			animals: types.image.animals()
		});
		schema.plugin(fakePlugin);
		Model = mongoose.model("Model", schema);
	});

	it('should generate fake items based on quantity', function (done) {
		var quantity = 10;
		Model.fake(quantity, function (items) {
			expect(items).to.exist;
			expect(items.length).to.equal(quantity);

			done();
		});
	});

	it('should generate fake items based on quantity & seed database', function (done) {
		var quantity = 10;
		Model.seed(quantity, function (err, items) {
			expect(err).to.not.exist;
			expect(items).to.exist;
			expect(items.length).to.equal(quantity);

			done();
		});
	});

	it('should fake all fields of model', function (done) {
		var item = new Model();
		item.fake();
		assert.isNotNull(item);
		assert.property(item, 'firstName');
		assert.property(item, 'lastName');
		assert.property(item, 'surName');
		assert.property(item, 'contact');
		assert.property(item.contact, 'customer');
		assert.property(item.contact.customer, 'supplier');
		assert.property(item.contact.customer.supplier, 'firstName');
		assert.property(item.contact.customer.supplier, 'lastName');
		assert.property(item.contact.customer, 'firstName');
		assert.property(item.contact.customer, 'lastName');
		assert.property(item.contact, 'firstName');
		assert.property(item.contact, 'lastName');
		assert.property(item, 'amount');
		assert.property(item, 'suffixes');
		assert.property(item, 'price');
		assert.property(item, 'number');
		assert.property(item, 'boolean');
		assert.property(item, 'image');
		assert.property(item, 'avatar');
		assert.property(item, 'imageUrl');
		assert.property(item, 'animals');

		done();
	});

	it('should fake specified fields only of model', function (done) {
		var item = new Model();
		item.fake(['firstName', 'surName', 'contact.customer.supplier.firstName']);
		expect(item).to.exist;
		expect(item.firstName).to.exist;
		expect(item.surName).to.exist;

		expect(item.lastName).to.not.exist;
		expect(item.amount).to.not.exist;

		done();
	});
});
