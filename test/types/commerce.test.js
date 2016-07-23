var types = require('../../src/types/commerce');
var expect = require('chai').expect;


describe('tests for commerce types', function () {
	"use strict";

	it('should generate color type', function () {
		var color = types.color({required: true});

		expect(color.type).to.exist;
		expect(color.type).to.equal('string');

		expect(color.fake).to.exist;
		expect(color).to.respondTo('fake');
		expect(color.fake()).to.be.a('string');

		expect(color.required).to.exist;
		expect(color.required).to.be.true;
	});

	it('should generate department type', function () {
		var department = types.department({required: true});

		expect(department.type).to.exist;
		expect(department.type).to.equal('string');

		expect(department.fake).to.exist;
		expect(department).to.respondTo('fake');
		expect(department.fake()).to.be.a('string');

		expect(department.required).to.exist;
		expect(department.required).to.be.true;
	});

	it('should generate productName type', function () {
		var productName = types.productName({required: true});

		expect(productName.type).to.exist;
		expect(productName.type).to.equal('string');

		expect(productName.fake).to.exist;
		expect(productName).to.respondTo('fake');
		expect(productName.fake()).to.be.a('string');

		expect(productName.required).to.exist;
		expect(productName.required).to.be.true;
	});

	it('should generate price type', function () {
		var price = types.price({required: true});

		expect(price.type).to.exist;
		expect(price.type).to.equal('number');

		expect(price.fake).to.exist;
		expect(price).to.respondTo('fake');
		expect(price.fake()).to.be.a('number');

		expect(price.required).to.exist;
		expect(price.required).to.be.true;
	});

	it('should generate productAdjective type', function () {
		var productAdjective = types.productAdjective({required: true});

		expect(productAdjective.type).to.exist;
		expect(productAdjective.type).to.equal('string');

		expect(productAdjective.fake).to.exist;
		expect(productAdjective).to.respondTo('fake');
		expect(productAdjective.fake()).to.be.a('string');

		expect(productAdjective.required).to.exist;
		expect(productAdjective.required).to.be.true;
	});

	it('should generate productAdjective type', function () {
		var productAdjective = types.productAdjective({required: true});

		expect(productAdjective.type).to.exist;
		expect(productAdjective.type).to.equal('string');

		expect(productAdjective.fake).to.exist;
		expect(productAdjective).to.respondTo('fake');
		expect(productAdjective.fake()).to.be.a('string');

		expect(productAdjective.required).to.exist;
		expect(productAdjective.required).to.be.true;
	});

	it('should generate product type', function () {
		var product = types.product({required: true});

		expect(product.type).to.exist;
		expect(product.type).to.equal('string');

		expect(product.fake).to.exist;
		expect(product).to.respondTo('fake');
		expect(product.fake()).to.be.a('string');

		expect(product.required).to.exist;
		expect(product.required).to.be.true;
	});
});
