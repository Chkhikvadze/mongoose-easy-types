var types = require('../../src/types/helpers');
var expect = require('chai').expect;


describe('tests for helpers types', function () {
	"use strict";

	it('should generate randomize type', function () {
		var randomize = types.randomize({required: true});

		expect(randomize.type).to.exist;
		expect(randomize.type).to.equal('string');

		expect(randomize.fake).to.exist;
		expect(randomize).to.respondTo('fake');
		expect(randomize.fake()).to.be.a('string');

		expect(randomize.required).to.exist;
		expect(randomize.required).to.be.true;
	});

	it('should generate slugify type', function () {
		var slugify = types.slugify({required: true});

		expect(slugify.type).to.exist;
		expect(slugify.type).to.equal('string');

		expect(slugify.fake).to.exist;
		expect(slugify).to.respondTo('fake');
		expect(slugify.fake()).to.be.a('string');

		expect(slugify.required).to.exist;
		expect(slugify.required).to.be.true;
	});

	it('should generate replaceSymbolWithNumber type', function () {
		var replaceSymbolWithNumber = types.replaceSymbolWithNumber({required: true});

		expect(replaceSymbolWithNumber.type).to.exist;
		expect(replaceSymbolWithNumber.type).to.equal('string');

		expect(replaceSymbolWithNumber.fake).to.exist;
		expect(replaceSymbolWithNumber).to.respondTo('fake');
		expect(replaceSymbolWithNumber.fake()).to.be.a('string');

		expect(replaceSymbolWithNumber.required).to.exist;
		expect(replaceSymbolWithNumber.required).to.be.true;
	});

	it('should generate replaceSymbols type', function () {
		var replaceSymbols = types.replaceSymbols({required: true});

		expect(replaceSymbols.type).to.exist;
		expect(replaceSymbols.type).to.equal('string');

		expect(replaceSymbols.fake).to.exist;
		expect(replaceSymbols).to.respondTo('fake');
		expect(replaceSymbols.fake()).to.be.a('string');

		expect(replaceSymbols.required).to.exist;
		expect(replaceSymbols.required).to.be.true;
	});

	it('should generate shuffle type', function () {
		var shuffle = types.shuffle({required: true});

		expect(shuffle.type).to.exist;
		expect(shuffle.type).to.be.instanceof(Array);

		expect(shuffle.fake).to.exist;
		expect(shuffle).to.respondTo('fake');
		expect(shuffle.fake()).to.be.instanceof(Array);

		expect(shuffle.required).to.exist;
		expect(shuffle.required).to.be.true;
	});

	it('should generate mustache type', function () {
		var mustache = types.mustache({required: true});

		expect(mustache.type).to.exist;
		expect(mustache.type).to.equal('string');

		expect(mustache.fake).to.exist;
		expect(mustache).to.respondTo('fake');
		expect(mustache.fake()).to.be.a('string');

		expect(mustache.required).to.exist;
		expect(mustache.required).to.be.true;
	});

	it('should generate createCard type', function () {
		var createCard = types.createCard({required: true});

		expect(createCard.type).to.exist;
		expect(createCard.type).to.be.a('object');

		expect(createCard.fake).to.exist;
		expect(createCard).to.respondTo('fake');
		expect(createCard.fake()).to.be.a('object');

		expect(createCard.required).to.exist;
		expect(createCard.required).to.be.true;
	});

	it('should generate contextualCard type', function () {
		var contextualCard = types.contextualCard({required: true});

		expect(contextualCard.type).to.exist;
		expect(contextualCard.type).to.be.a('object');

		expect(contextualCard.fake).to.exist;
		expect(contextualCard).to.respondTo('fake');
		expect(contextualCard.fake()).to.be.a('object');

		expect(contextualCard.required).to.exist;
		expect(contextualCard.required).to.be.true;
	});

	it('should generate userCard type', function () {
		var userCard = types.userCard({required: true});

		expect(userCard.type).to.exist;
		expect(userCard.type).to.be.a('object');

		expect(userCard.fake).to.exist;
		expect(userCard).to.respondTo('fake');
		expect(userCard.fake()).to.be.a('object');

		expect(userCard.required).to.exist;
		expect(userCard.required).to.be.true;
	});

	it('should generate createTransaction type', function () {
		var createTransaction = types.createTransaction({required: true});

		expect(createTransaction.type).to.exist;
		expect(createTransaction.type).to.be.a('object');

		expect(createTransaction.fake).to.exist;
		expect(createTransaction).to.respondTo('fake');
		expect(createTransaction.fake()).to.be.a('object');

		expect(createTransaction.required).to.exist;
		expect(createTransaction.required).to.be.true;
	});
});
