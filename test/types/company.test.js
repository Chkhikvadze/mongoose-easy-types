var types = require('../../src/types/company');
var expect = require('chai').expect;


describe('tests for company types', function () {
	"use strict";

	it('should generate suffixes type', function () {
		var suffixes = types.suffixes({required: true});

		expect(suffixes.type).to.exist;
		expect(suffixes.type).to.be.instanceof(Array);

		expect(suffixes.fakePath).to.exist;
		expect(suffixes).to.respondTo('fakePath');
		expect(suffixes.fakePath()).to.be.instanceof(Array);


		expect(suffixes.required).to.exist;
		expect(suffixes.required).to.be.true;
	});

	it('should generate companyName type', function () {
		var companyName = types.companyName({required: true});

		expect(companyName.type).to.exist;
		expect(companyName.type).to.equal('string');

		expect(companyName.fakePath).to.exist;
		expect(companyName).to.respondTo('fakePath');
		expect(companyName.fakePath()).to.be.a('string');

		expect(companyName.required).to.exist;
		expect(companyName.required).to.be.true;
	});

	it('should generate companySuffix type', function () {
		var companySuffix = types.companySuffix({required: true});

		expect(companySuffix.type).to.exist;
		expect(companySuffix.type).to.equal('string');

		expect(companySuffix.fakePath).to.exist;
		expect(companySuffix).to.respondTo('fakePath');
		expect(companySuffix.fakePath()).to.be.a('string');

		expect(companySuffix.required).to.exist;
		expect(companySuffix.required).to.be.true;
	});

	it('should generate catchPhrase type', function () {
		var catchPhrase = types.catchPhrase({required: true});

		expect(catchPhrase.type).to.exist;
		expect(catchPhrase.type).to.equal('string');

		expect(catchPhrase.fakePath).to.exist;
		expect(catchPhrase).to.respondTo('fakePath');
		expect(catchPhrase.fakePath()).to.be.a('string');

		expect(catchPhrase.required).to.exist;
		expect(catchPhrase.required).to.be.true;
	});

	it('should generate bs type', function () {
		var bs = types.bs({required: true});

		expect(bs.type).to.exist;
		expect(bs.type).to.equal('string');

		expect(bs.fakePath).to.exist;
		expect(bs).to.respondTo('fakePath');
		expect(bs.fakePath()).to.be.a('string');

		expect(bs.required).to.exist;
		expect(bs.required).to.be.true;
	});

	it('should generate catchPhraseAdjective type', function () {
		var catchPhraseAdjective = types.catchPhraseAdjective({required: true});

		expect(catchPhraseAdjective.type).to.exist;
		expect(catchPhraseAdjective.type).to.equal('string');

		expect(catchPhraseAdjective.fakePath).to.exist;
		expect(catchPhraseAdjective).to.respondTo('fakePath');
		expect(catchPhraseAdjective.fakePath()).to.be.a('string');

		expect(catchPhraseAdjective.required).to.exist;
		expect(catchPhraseAdjective.required).to.be.true;
	});

	it('should generate catchPhraseDescriptor type', function () {
		var catchPhraseDescriptor = types.catchPhraseDescriptor({required: true});

		expect(catchPhraseDescriptor.type).to.exist;
		expect(catchPhraseDescriptor.type).to.equal('string');

		expect(catchPhraseDescriptor.fakePath).to.exist;
		expect(catchPhraseDescriptor).to.respondTo('fakePath');
		expect(catchPhraseDescriptor.fakePath()).to.be.a('string');

		expect(catchPhraseDescriptor.required).to.exist;
		expect(catchPhraseDescriptor.required).to.be.true;
	});

	it('should generate catchPhraseNoun type', function () {
		var catchPhraseNoun = types.catchPhraseNoun({required: true});

		expect(catchPhraseNoun.type).to.exist;
		expect(catchPhraseNoun.type).to.equal('string');

		expect(catchPhraseNoun.fakePath).to.exist;
		expect(catchPhraseNoun).to.respondTo('fakePath');
		expect(catchPhraseNoun.fakePath()).to.be.a('string');

		expect(catchPhraseNoun.required).to.exist;
		expect(catchPhraseNoun.required).to.be.true;
	});

	it('should generate bsAdjective type', function () {
		var bsAdjective = types.bsAdjective({required: true});

		expect(bsAdjective.type).to.exist;
		expect(bsAdjective.type).to.equal('string');

		expect(bsAdjective.fakePath).to.exist;
		expect(bsAdjective).to.respondTo('fakePath');
		expect(bsAdjective.fakePath()).to.be.a('string');

		expect(bsAdjective.required).to.exist;
		expect(bsAdjective.required).to.be.true;
	});

	it('should generate bsBuzz type', function () {
		var bsBuzz = types.bsBuzz({required: true});

		expect(bsBuzz.type).to.exist;
		expect(bsBuzz.type).to.equal('string');

		expect(bsBuzz.fakePath).to.exist;
		expect(bsBuzz).to.respondTo('fakePath');
		expect(bsBuzz.fakePath()).to.be.a('string');

		expect(bsBuzz.required).to.exist;
		expect(bsBuzz.required).to.be.true;
	});

	it('should generate bsNoun type', function () {
		var bsNoun = types.bsNoun({required: true});

		expect(bsNoun.type).to.exist;
		expect(bsNoun.type).to.equal('string');

		expect(bsNoun.fakePath).to.exist;
		expect(bsNoun).to.respondTo('fakePath');
		expect(bsNoun.fakePath()).to.be.a('string');

		expect(bsNoun.required).to.exist;
		expect(bsNoun.required).to.be.true;
	});
});
