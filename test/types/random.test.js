var types = require('../../src/types/random');
var expect = require('chai').expect;


describe('tests for random types', function () {
	"use strict";

	it('should generate number type', function () {
		var number = types.number({required: true});

		expect(number.type).to.exist;
		expect(number.type).to.equal('number');

		expect(number.fake).to.exist;
		expect(number).to.respondTo('fake');
		expect(number.fake()).to.be.a('number');

		expect(number.required).to.exist;
		expect(number.required).to.be.true;

	});

	it('should generate arrayElement type', function () {
		var arrayElement = types.arrayElement({required: true});

		expect(arrayElement.type).to.exist;
		expect(arrayElement.type).to.equal('string');

		expect(arrayElement.fake).to.exist;
		expect(arrayElement).to.respondTo('fake');
		expect(arrayElement.fake()).to.be.a('string');

		expect(arrayElement.required).to.exist;
		expect(arrayElement.required).to.be.true;
	});

	it('should generate objectElement type', function () {
		var objectElement = types.objectElement({required: true});

		expect(objectElement.type).to.exist;
		expect(objectElement.type).to.equal('string');

		expect(objectElement.fake).to.exist;
		expect(objectElement).to.respondTo('fake');
		expect(objectElement.fake()).to.be.a('string');

		expect(objectElement.required).to.exist;
		expect(objectElement.required).to.be.true;
	});

	// it('should generate uuid type', function () {
	// 	var uuid = types.uuid({required: true});
    //
	// 	expect(uuid.type).to.exist;
	// 	expect(uuid.type).to.equal('string');
    //
	// 	expect(uuid.fake).to.exist;
	// 	expect(uuid).to.respondTo('fake');
	// 	expect(uuid.fake()).to.be.a('number');
    //
	// 	expect(uuid.required).to.exist;
	// 	expect(uuid.required).to.be.true;
	// });

	it('should generate boolean type', function () {
		var boolean = types.boolean({required: true});

		expect(boolean.type).to.exist;
		expect(boolean.type).to.equal('boolean');

		expect(boolean.fake).to.exist;
		expect(boolean).to.respondTo('fake');
		expect(boolean.fake()).to.be.a('boolean');

		expect(boolean.required).to.exist;
		expect(boolean.required).to.be.true;
	});

	it('should generate word type', function () {
		var word = types.word({required: true});

		expect(word.type).to.exist;
		expect(word.type).to.equal('string');

		expect(word.fake).to.exist;
		expect(word).to.respondTo('fake');
		expect(word.fake()).to.be.a('string');

		expect(word.required).to.exist;
		expect(word.required).to.be.true;
	});

	it('should generate words type', function () {
		var words = types.words({required: true});

		expect(words.type).to.exist;
		expect(words.type).to.equal('string');

		expect(words.fake).to.exist;
		expect(words).to.respondTo('fake');
		expect(words.fake()).to.be.a('string');

		expect(words.required).to.exist;
		expect(words.required).to.be.true;
	});

	it('should generate locale type', function () {
		var locale = types.locale({required: true});

		expect(locale.type).to.exist;
		expect(locale.type).to.equal('string');

		expect(locale.fake).to.exist;
		expect(locale).to.respondTo('fake');
		expect(locale.fake()).to.be.a('string');

		expect(locale.required).to.exist;
		expect(locale.required).to.be.true;
	});

	it('should generate alphaNumeric type', function () {
		var alphaNumeric = types.alphaNumeric({required: true});

		expect(alphaNumeric.type).to.exist;
		expect(alphaNumeric.type).to.equal('string');

		expect(alphaNumeric.fake).to.exist;
		expect(alphaNumeric).to.respondTo('fake');
		expect(alphaNumeric.fake()).to.be.a('string');

		expect(alphaNumeric.required).to.exist;
		expect(alphaNumeric.required).to.be.true;
	});

});
