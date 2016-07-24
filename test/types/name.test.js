var types = require('../../src/types/name');
var expect = require('chai').expect;


describe('tests for name types', function () {
	"use strict";

	it('should generate firstName type', function () {
		var firstName = types.firstName({required: true});

		expect(firstName.type).to.exist;
		expect(firstName.type).to.equal('string');

		expect(firstName.fakePath).to.exist;
		expect(firstName).to.respondTo('fakePath');
		expect(firstName.fakePath()).to.be.a('string');

		expect(firstName.required).to.exist;
		expect(firstName.required).to.be.true;
	});

	it('should generate lastName type', function () {
		var lastName = types.lastName({required: true});

		expect(lastName.type).to.exist;
		expect(lastName.type).to.equal('string');

		expect(lastName.fakePath).to.exist;
		expect(lastName).to.respondTo('fakePath');
		expect(lastName.fakePath()).to.be.a('string');

		expect(lastName.required).to.exist;
		expect(lastName.required).to.be.true;
	});

	it('should generate findName type', function () {
		var findName = types.findName({required: true});

		expect(findName.type).to.exist;
		expect(findName.type).to.equal('string');

		expect(findName.fakePath).to.exist;
		expect(findName).to.respondTo('fakePath');
		expect(findName.fakePath()).to.be.a('string');

		expect(findName.required).to.exist;
		expect(findName.required).to.be.true;
	});

	it('should generate jobTitle type', function () {
		var jobTitle = types.jobTitle({required: true});

		expect(jobTitle.type).to.exist;
		expect(jobTitle.type).to.equal('string');

		expect(jobTitle.fakePath).to.exist;
		expect(jobTitle).to.respondTo('fakePath');
		expect(jobTitle.fakePath()).to.be.a('string');

		expect(jobTitle.required).to.exist;
		expect(jobTitle.required).to.be.true;
	});

	it('should generate prefix type', function () {
		var prefix = types.prefix({required: true});

		expect(prefix.type).to.exist;
		expect(prefix.type).to.equal('string');

		expect(prefix.fakePath).to.exist;
		expect(prefix).to.respondTo('fakePath');
		expect(prefix.fakePath()).to.be.a('string');

		expect(prefix.required).to.exist;
		expect(prefix.required).to.be.true;
	});

	it('should generate title type', function () {
		var title = types.title({required: true});

		expect(title.type).to.exist;
		expect(title.type).to.equal('string');

		expect(title.fakePath).to.exist;
		expect(title).to.respondTo('fakePath');
		expect(title.fakePath()).to.be.a('string');

		expect(title.required).to.exist;
		expect(title.required).to.be.true;
	});

	it('should generate jobDescriptor type', function () {
		var jobDescriptor = types.jobDescriptor({required: true});

		expect(jobDescriptor.type).to.exist;
		expect(jobDescriptor.type).to.equal('string');

		expect(jobDescriptor.fakePath).to.exist;
		expect(jobDescriptor).to.respondTo('fakePath');
		expect(jobDescriptor.fakePath()).to.be.a('string');

		expect(jobDescriptor.required).to.exist;
		expect(jobDescriptor.required).to.be.true;
	});

	it('should generate jobDescriptor type', function () {
		var jobDescriptor = types.jobDescriptor({required: true});

		expect(jobDescriptor.type).to.exist;
		expect(jobDescriptor.type).to.equal('string');

		expect(jobDescriptor.fakePath).to.exist;
		expect(jobDescriptor).to.respondTo('fakePath');
		expect(jobDescriptor.fakePath()).to.be.a('string');

		expect(jobDescriptor.required).to.exist;
		expect(jobDescriptor.required).to.be.true;
	});

	it('should generate jobArea type', function () {
		var jobArea = types.jobArea({required: true});

		expect(jobArea.type).to.exist;
		expect(jobArea.type).to.equal('string');

		expect(jobArea.fakePath).to.exist;
		expect(jobArea).to.respondTo('fakePath');
		expect(jobArea.fakePath()).to.be.a('string');

		expect(jobArea.required).to.exist;
		expect(jobArea.required).to.be.true;
	});

	it('should generate jobType type', function () {
		var jobType = types.jobType({required: true});

		expect(jobType.type).to.exist;
		expect(jobType.type).to.equal('string');

		expect(jobType.fakePath).to.exist;
		expect(jobType).to.respondTo('fakePath');
		expect(jobType.fakePath()).to.be.a('string');

		expect(jobType.required).to.exist;
		expect(jobType.required).to.be.true;
	});
});
