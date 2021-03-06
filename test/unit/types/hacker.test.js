var types = require('../../../src/types/hacker');
var expect = require('chai').expect;


describe('tests for hacker types', function () {
	"use strict";

	it('should generate abbreviation type', function () {
		var abbreviation = types.abbreviation({required: true});

		expect(abbreviation.type).to.exist;
		expect(abbreviation.type).to.equal('string');

		expect(abbreviation.fakePath).to.exist;
		expect(abbreviation).to.respondTo('fakePath');
		expect(abbreviation.fakePath()).to.be.a('string');

		expect(abbreviation.required).to.exist;
		expect(abbreviation.required).to.be.true;
	});

	it('should generate adjective type', function () {
		var adjective = types.adjective({required: true});

		expect(adjective.type).to.exist;
		expect(adjective.type).to.equal('string');

		expect(adjective.fakePath).to.exist;
		expect(adjective).to.respondTo('fakePath');
		expect(adjective.fakePath()).to.be.a('string');

		expect(adjective.required).to.exist;
		expect(adjective.required).to.be.true;
	});

	it('should generate noun type', function () {
		var noun = types.noun({required: true});

		expect(noun.type).to.exist;
		expect(noun.type).to.equal('string');

		expect(noun.fakePath).to.exist;
		expect(noun).to.respondTo('fakePath');
		expect(noun.fakePath()).to.be.a('string');

		expect(noun.required).to.exist;
		expect(noun.required).to.be.true;
	});

	it('should generate verb type', function () {
		var verb = types.verb({required: true});

		expect(verb.type).to.exist;
		expect(verb.type).to.equal('string');

		expect(verb.fakePath).to.exist;
		expect(verb).to.respondTo('fakePath');
		expect(verb.fakePath()).to.be.a('string');

		expect(verb.required).to.exist;
		expect(verb.required).to.be.true;
	});

	it('should generate ingverb type', function () {
		var ingverb = types.ingverb({required: true});

		expect(ingverb.type).to.exist;
		expect(ingverb.type).to.equal('string');

		expect(ingverb.fakePath).to.exist;
		expect(ingverb).to.respondTo('fakePath');
		expect(ingverb.fakePath()).to.be.a('string');

		expect(ingverb.required).to.exist;
		expect(ingverb.required).to.be.true;
	});

	it('should generate phrase type', function () {
		var phrase = types.phrase({required: true});

		expect(phrase.type).to.exist;
		expect(phrase.type).to.equal('string');

		expect(phrase.fakePath).to.exist;
		expect(phrase).to.respondTo('fakePath');
		expect(phrase.fakePath()).to.be.a('string');

		expect(phrase.required).to.exist;
		expect(phrase.required).to.be.true;
	});

});
