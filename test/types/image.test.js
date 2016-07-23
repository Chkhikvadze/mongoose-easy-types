var types = require('../../src/types/image');
var expect = require('chai').expect;


describe('tests for image types', function () {
	"use strict";

	it('should generate image type', function () {
		var image = types.image({required: true});

		expect(image.type).to.exist;
		expect(image.type).to.equal('string');

		expect(image.fake).to.exist;
		expect(image).to.respondTo('fake');
		expect(image.fake()).to.be.a('string');

		expect(image.required).to.exist;
		expect(image.required).to.be.true;
	});

	it('should generate avatar type', function () {
		var avatar = types.avatar({required: true});

		expect(avatar.type).to.exist;
		expect(avatar.type).to.equal('string');

		expect(avatar.fake).to.exist;
		expect(avatar).to.respondTo('fake');
		expect(avatar.fake()).to.be.a('string');

		expect(avatar.required).to.exist;
		expect(avatar.required).to.be.true;
	});

	it('should generate imageUrl type', function () {
		var imageUrl = types.imageUrl({required: true});

		expect(imageUrl.type).to.exist;
		expect(imageUrl.type).to.equal('string');

		expect(imageUrl.fake).to.exist;
		expect(imageUrl).to.respondTo('fake');
		expect(imageUrl.fake()).to.be.a('string');

		expect(imageUrl.required).to.exist;
		expect(imageUrl.required).to.be.true;
	});

	it('should generate abstract type', function () {
		var abstract = types.abstract({required: true});

		expect(abstract.type).to.exist;
		expect(abstract.type).to.equal('string');

		expect(abstract.fake).to.exist;
		expect(abstract).to.respondTo('fake');
		expect(abstract.fake()).to.be.a('string');

		expect(abstract.required).to.exist;
		expect(abstract.required).to.be.true;
	});

	it('should generate animals type', function () {
		var animals = types.animals({required: true});

		expect(animals.type).to.exist;
		expect(animals.type).to.equal('string');

		expect(animals.fake).to.exist;
		expect(animals).to.respondTo('fake');
		expect(animals.fake()).to.be.a('string');

		expect(animals.required).to.exist;
		expect(animals.required).to.be.true;
	});

	it('should generate business type', function () {
		var business = types.business({required: true});

		expect(business.type).to.exist;
		expect(business.type).to.equal('string');

		expect(business.fake).to.exist;
		expect(business).to.respondTo('fake');
		expect(business.fake()).to.be.a('string');

		expect(business.required).to.exist;
		expect(business.required).to.be.true;
	});

	it('should generate cats type', function () {
		var cats = types.cats({required: true});

		expect(cats.type).to.exist;
		expect(cats.type).to.equal('string');

		expect(cats.fake).to.exist;
		expect(cats).to.respondTo('fake');
		expect(cats.fake()).to.be.a('string');

		expect(cats.required).to.exist;
		expect(cats.required).to.be.true;
	});

	it('should generate city type', function () {
		var city = types.city({required: true});

		expect(city.type).to.exist;
		expect(city.type).to.equal('string');

		expect(city.fake).to.exist;
		expect(city).to.respondTo('fake');
		expect(city.fake()).to.be.a('string');

		expect(city.required).to.exist;
		expect(city.required).to.be.true;
	});

	it('should generate food type', function () {
		var food = types.food({required: true});

		expect(food.type).to.exist;
		expect(food.type).to.equal('string');

		expect(food.fake).to.exist;
		expect(food).to.respondTo('fake');
		expect(food.fake()).to.be.a('string');

		expect(food.required).to.exist;
		expect(food.required).to.be.true;
	});

	it('should generate nightlife type', function () {
		var nightlife = types.nightlife({required: true});

		expect(nightlife.type).to.exist;
		expect(nightlife.type).to.equal('string');

		expect(nightlife.fake).to.exist;
		expect(nightlife).to.respondTo('fake');
		expect(nightlife.fake()).to.be.a('string');

		expect(nightlife.required).to.exist;
		expect(nightlife.required).to.be.true;
	});

	it('should generate fashion type', function () {
		var fashion = types.fashion({required: true});

		expect(fashion.type).to.exist;
		expect(fashion.type).to.equal('string');

		expect(fashion.fake).to.exist;
		expect(fashion).to.respondTo('fake');
		expect(fashion.fake()).to.be.a('string');

		expect(fashion.required).to.exist;
		expect(fashion.required).to.be.true;
	});

	it('should generate people type', function () {
		var people = types.people({required: true});

		expect(people.type).to.exist;
		expect(people.type).to.equal('string');

		expect(people.fake).to.exist;
		expect(people).to.respondTo('fake');
		expect(people.fake()).to.be.a('string');

		expect(people.required).to.exist;
		expect(people.required).to.be.true;
	});

	it('should generate nature type', function () {
		var nature = types.nature({required: true});

		expect(nature.type).to.exist;
		expect(nature.type).to.equal('string');

		expect(nature.fake).to.exist;
		expect(nature).to.respondTo('fake');
		expect(nature.fake()).to.be.a('string');

		expect(nature.required).to.exist;
		expect(nature.required).to.be.true;
	});

	it('should generate sports type', function () {
		var sports = types.sports({required: true});

		expect(sports.type).to.exist;
		expect(sports.type).to.equal('string');

		expect(sports.fake).to.exist;
		expect(sports).to.respondTo('fake');
		expect(sports.fake()).to.be.a('string');

		expect(sports.required).to.exist;
		expect(sports.required).to.be.true;
	});

	it('should generate technics type', function () {
		var technics = types.technics({required: true});

		expect(technics.type).to.exist;
		expect(technics.type).to.equal('string');

		expect(technics.fake).to.exist;
		expect(technics).to.respondTo('fake');
		expect(technics.fake()).to.be.a('string');

		expect(technics.required).to.exist;
		expect(technics.required).to.be.true;
	});

	it('should generate transport type', function () {
		var transport = types.transport({required: true});

		expect(transport.type).to.exist;
		expect(transport.type).to.equal('string');

		expect(transport.fake).to.exist;
		expect(transport).to.respondTo('fake');
		expect(transport.fake()).to.be.a('string');

		expect(transport.required).to.exist;
		expect(transport.required).to.be.true;
	});
});
