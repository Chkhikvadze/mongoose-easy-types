var types = require('../../../src/types/helpers');
var expect = require('chai').expect;


describe('tests for helpers types', function () {
	"use strict";

	it('should generate randomize type', function () {
		var randomize = types.randomize({required: true});

		expect(randomize.type).to.exist;
		expect(randomize.type).to.equal('string');

		expect(randomize.fakePath).to.exist;
		expect(randomize).to.respondTo('fakePath');
		expect(randomize.fakePath()).to.be.a('string');

		expect(randomize.required).to.exist;
		expect(randomize.required).to.be.true;
	});

	it('should generate slugify type', function () {
		var slugify = types.slugify({required: true});

		expect(slugify.type).to.exist;
		expect(slugify.type).to.equal('string');

		expect(slugify.fakePath).to.exist;
		expect(slugify).to.respondTo('fakePath');
		expect(slugify.fakePath()).to.be.a('string');

		expect(slugify.required).to.exist;
		expect(slugify.required).to.be.true;
	});

	it('should generate replaceSymbolWithNumber type', function () {
		var replaceSymbolWithNumber = types.replaceSymbolWithNumber({required: true});

		expect(replaceSymbolWithNumber.type).to.exist;
		expect(replaceSymbolWithNumber.type).to.equal('string');

		expect(replaceSymbolWithNumber.fakePath).to.exist;
		expect(replaceSymbolWithNumber).to.respondTo('fakePath');
		expect(replaceSymbolWithNumber.fakePath()).to.be.a('string');

		expect(replaceSymbolWithNumber.required).to.exist;
		expect(replaceSymbolWithNumber.required).to.be.true;
	});

	it('should generate replaceSymbols type', function () {
		var replaceSymbols = types.replaceSymbols({required: true});

		expect(replaceSymbols.type).to.exist;
		expect(replaceSymbols.type).to.equal('string');

		expect(replaceSymbols.fakePath).to.exist;
		expect(replaceSymbols).to.respondTo('fakePath');
		expect(replaceSymbols.fakePath()).to.be.a('string');

		expect(replaceSymbols.required).to.exist;
		expect(replaceSymbols.required).to.be.true;
	});

	it('should generate shuffle type', function () {
		var shuffle = types.shuffle({required: true});

		expect(shuffle.type).to.exist;
		expect(shuffle.type).to.be.instanceof(Array);

		expect(shuffle.fakePath).to.exist;
		expect(shuffle).to.respondTo('fakePath');
		expect(shuffle.fakePath()).to.be.instanceof(Array);

		expect(shuffle.required).to.exist;
		expect(shuffle.required).to.be.true;
	});

	it('should generate mustache type', function () {
		var mustache = types.mustache({required: true});

		expect(mustache.type).to.exist;
		expect(mustache.type).to.equal('string');

		expect(mustache.fakePath).to.exist;
		expect(mustache).to.respondTo('fakePath');
		expect(mustache.fakePath()).to.be.a('string');

		expect(mustache.required).to.exist;
		expect(mustache.required).to.be.true;
	});

	it('should generate createCard type', function () {
		var createCard = types.createCard({required: true});

		expect(createCard.type).to.exist;
		expect(createCard.type).to.be.a('object');

		expect(createCard.fakePath).to.exist;
		expect(createCard).to.respondTo('fakePath');
		expect(createCard.fakePath()).to.be.a('object');

		expect(createCard.required).to.exist;
		expect(createCard.required).to.be.true;
	});

	it('should generate contextualCard type', function () {
		var contextualCard = types.contextualCard({required: true});

		expect(contextualCard.type).to.exist;
		expect(contextualCard.type).to.be.a('object');

		expect(contextualCard.fakePath).to.exist;
		expect(contextualCard).to.respondTo('fakePath');
		expect(contextualCard.fakePath()).to.be.a('object');

		expect(contextualCard.required).to.exist;
		expect(contextualCard.required).to.be.true;
	});

	it('should generate userCard type', function () {
		var userCard = types.userCard({required: true});

		expect(userCard.type).to.exist;
		expect(userCard.type).to.be.a('object');

		expect(userCard.fakePath).to.exist;
		expect(userCard).to.respondTo('fakePath');
		expect(userCard.fakePath()).to.be.a('object');

		expect(userCard.required).to.exist;
		expect(userCard.required).to.be.true;
	});

	it('should generate createTransaction type', function () {
		var createTransaction = types.createTransaction({required: true});

		expect(createTransaction.type).to.exist;
		expect(createTransaction.type).to.be.a('object');

		expect(createTransaction.fakePath).to.exist;
		expect(createTransaction).to.respondTo('fakePath');
		expect(createTransaction.fakePath()).to.be.a('object');

		expect(createTransaction.required).to.exist;
		expect(createTransaction.required).to.be.true;
	});
});
