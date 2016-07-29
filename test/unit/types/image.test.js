var types = require('../../../src/types/image');
var expect = require('chai').expect;


describe('tests for image types', function () {
	"use strict";

	it('should generate image type', function () {
		var image = types.image({required: true});

		expect(image.type).to.exist;
		expect(image.type).to.equal('string');

		expect(image.fakePath).to.exist;
		expect(image).to.respondTo('fakePath');
		expect(image.fakePath()).to.be.a('string');

		expect(image.required).to.exist;
		expect(image.required).to.be.true;
	});

	it('should generate avatar type', function () {
		var avatar = types.avatar({required: true});

		expect(avatar.type).to.exist;
		expect(avatar.type).to.equal('string');

		expect(avatar.fakePath).to.exist;
		expect(avatar).to.respondTo('fakePath');
		expect(avatar.fakePath()).to.be.a('string');

		expect(avatar.required).to.exist;
		expect(avatar.required).to.be.true;
	});

	it('should generate imageUrl type', function () {
		var imageUrl = types.imageUrl({required: true});

		expect(imageUrl.type).to.exist;
		expect(imageUrl.type).to.equal('string');

		expect(imageUrl.fakePath).to.exist;
		expect(imageUrl).to.respondTo('fakePath');
		expect(imageUrl.fakePath()).to.be.a('string');

		expect(imageUrl.required).to.exist;
		expect(imageUrl.required).to.be.true;
	});

	it('should generate abstract type', function () {
		var abstract = types.abstract({required: true});

		expect(abstract.type).to.exist;
		expect(abstract.type).to.equal('string');

		expect(abstract.fakePath).to.exist;
		expect(abstract).to.respondTo('fakePath');
		expect(abstract.fakePath()).to.be.a('string');

		expect(abstract.required).to.exist;
		expect(abstract.required).to.be.true;
	});

	it('should generate animals type', function () {
		var animals = types.animals({required: true});

		expect(animals.type).to.exist;
		expect(animals.type).to.equal('string');

		expect(animals.fakePath).to.exist;
		expect(animals).to.respondTo('fakePath');
		expect(animals.fakePath()).to.be.a('string');

		expect(animals.required).to.exist;
		expect(animals.required).to.be.true;
	});

	it('should generate business type', function () {
		var business = types.business({required: true});

		expect(business.type).to.exist;
		expect(business.type).to.equal('string');

		expect(business.fakePath).to.exist;
		expect(business).to.respondTo('fakePath');
		expect(business.fakePath()).to.be.a('string');

		expect(business.required).to.exist;
		expect(business.required).to.be.true;
	});

	it('should generate cats type', function () {
		var cats = types.cats({required: true});

		expect(cats.type).to.exist;
		expect(cats.type).to.equal('string');

		expect(cats.fakePath).to.exist;
		expect(cats).to.respondTo('fakePath');
		expect(cats.fakePath()).to.be.a('string');

		expect(cats.required).to.exist;
		expect(cats.required).to.be.true;
	});

	it('should generate city type', function () {
		var city = types.city({required: true});

		expect(city.type).to.exist;
		expect(city.type).to.equal('string');

		expect(city.fakePath).to.exist;
		expect(city).to.respondTo('fakePath');
		expect(city.fakePath()).to.be.a('string');

		expect(city.required).to.exist;
		expect(city.required).to.be.true;
	});

	it('should generate food type', function () {
		var food = types.food({required: true});

		expect(food.type).to.exist;
		expect(food.type).to.equal('string');

		expect(food.fakePath).to.exist;
		expect(food).to.respondTo('fakePath');
		expect(food.fakePath()).to.be.a('string');

		expect(food.required).to.exist;
		expect(food.required).to.be.true;
	});

	it('should generate nightlife type', function () {
		var nightlife = types.nightlife({required: true});

		expect(nightlife.type).to.exist;
		expect(nightlife.type).to.equal('string');

		expect(nightlife.fakePath).to.exist;
		expect(nightlife).to.respondTo('fakePath');
		expect(nightlife.fakePath()).to.be.a('string');

		expect(nightlife.required).to.exist;
		expect(nightlife.required).to.be.true;
	});

	it('should generate fashion type', function () {
		var fashion = types.fashion({required: true});

		expect(fashion.type).to.exist;
		expect(fashion.type).to.equal('string');

		expect(fashion.fakePath).to.exist;
		expect(fashion).to.respondTo('fakePath');
		expect(fashion.fakePath()).to.be.a('string');

		expect(fashion.required).to.exist;
		expect(fashion.required).to.be.true;
	});

	it('should generate people type', function () {
		var people = types.people({required: true});

		expect(people.type).to.exist;
		expect(people.type).to.equal('string');

		expect(people.fakePath).to.exist;
		expect(people).to.respondTo('fakePath');
		expect(people.fakePath()).to.be.a('string');

		expect(people.required).to.exist;
		expect(people.required).to.be.true;
	});

	it('should generate nature type', function () {
		var nature = types.nature({required: true});

		expect(nature.type).to.exist;
		expect(nature.type).to.equal('string');

		expect(nature.fakePath).to.exist;
		expect(nature).to.respondTo('fakePath');
		expect(nature.fakePath()).to.be.a('string');

		expect(nature.required).to.exist;
		expect(nature.required).to.be.true;
	});

	it('should generate sports type', function () {
		var sports = types.sports({required: true});

		expect(sports.type).to.exist;
		expect(sports.type).to.equal('string');

		expect(sports.fakePath).to.exist;
		expect(sports).to.respondTo('fakePath');
		expect(sports.fakePath()).to.be.a('string');

		expect(sports.required).to.exist;
		expect(sports.required).to.be.true;
	});

	it('should generate technics type', function () {
		var technics = types.technics({required: true});

		expect(technics.type).to.exist;
		expect(technics.type).to.equal('string');

		expect(technics.fakePath).to.exist;
		expect(technics).to.respondTo('fakePath');
		expect(technics.fakePath()).to.be.a('string');

		expect(technics.required).to.exist;
		expect(technics.required).to.be.true;
	});

	it('should generate transport type', function () {
		var transport = types.transport({required: true});

		expect(transport.type).to.exist;
		expect(transport.type).to.equal('string');

		expect(transport.fakePath).to.exist;
		expect(transport).to.respondTo('fakePath');
		expect(transport.fakePath()).to.be.a('string');

		expect(transport.required).to.exist;
		expect(transport.required).to.be.true;
	});
});
