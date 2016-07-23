var types = require('../../src/types/lorem');
var expect = require('chai').expect;


describe('tests for lorem types', function () {
	"use strict";

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

	it('should generate sentence type', function () {
		var sentence = types.sentence({required: true});

		expect(sentence.type).to.exist;
		expect(sentence.type).to.equal('string');

		expect(sentence.fake).to.exist;
		expect(sentence).to.respondTo('fake');
		expect(sentence.fake()).to.be.a('string');

		expect(sentence.required).to.exist;
		expect(sentence.required).to.be.true;
	});

	it('should generate sentences type', function () {
		var sentences = types.sentences({required: true});

		expect(sentences.type).to.exist;
		expect(sentences.type).to.equal('string');

		expect(sentences.fake).to.exist;
		expect(sentences).to.respondTo('fake');
		expect(sentences.fake()).to.be.a('string');

		expect(sentences.required).to.exist;
		expect(sentences.required).to.be.true;
	});

	it('should generate paragraph type', function () {
		var paragraph = types.paragraph({required: true});

		expect(paragraph.type).to.exist;
		expect(paragraph.type).to.equal('string');

		expect(paragraph.fake).to.exist;
		expect(paragraph).to.respondTo('fake');
		expect(paragraph.fake()).to.be.a('string');

		expect(paragraph.required).to.exist;
		expect(paragraph.required).to.be.true;
	});

	it('should generate paragraphs type', function () {
		var paragraphs = types.paragraphs({required: true});

		expect(paragraphs.type).to.exist;
		expect(paragraphs.type).to.equal('string');

		expect(paragraphs.fake).to.exist;
		expect(paragraphs).to.respondTo('fake');
		expect(paragraphs.fake()).to.be.a('string');

		expect(paragraphs.required).to.exist;
		expect(paragraphs.required).to.be.true;
	});

	it('should generate text type', function () {
		var text = types.text({required: true});

		expect(text.type).to.exist;
		expect(text.type).to.equal('string');

		expect(text.fake).to.exist;
		expect(text).to.respondTo('fake');
		expect(text.fake()).to.be.a('string');

		expect(text.required).to.exist;
		expect(text.required).to.be.true;
	});

	it('should generate lines type', function () {
		var lines = types.lines({required: true});

		expect(lines.type).to.exist;
		expect(lines.type).to.equal('string');

		expect(lines.fake).to.exist;
		expect(lines).to.respondTo('fake');
		expect(lines.fake()).to.be.a('string');

		expect(lines.required).to.exist;
		expect(lines.required).to.be.true;
	});
});
