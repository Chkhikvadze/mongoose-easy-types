var types = require('../../src/types/date');
var expect = require('chai').expect;


describe('tests for date types', function () {
	"use strict";

	it('should generate past type', function () {
		var past = types.past({required: true});

		expect(past.type).to.exist;
		expect(past.type).to.equal('date');

		expect(past.fake).to.exist;
		expect(past).to.respondTo('fake');
		expect(past.fake()).to.be.a('date');

		expect(past.required).to.exist;
		expect(past.required).to.be.true;
	});

	it('should generate future type', function () {
		var future = types.future({required: true});

		expect(future.type).to.exist;
		expect(future.type).to.equal('date');

		expect(future.fake).to.exist;
		expect(future).to.respondTo('fake');
		expect(future.fake()).to.be.a('date');

		expect(future.required).to.exist;
		expect(future.required).to.be.true;
	});

	it('should generate between type', function () {
		var between = types.between({required: true});

		expect(between.type).to.exist;
		expect(between.type).to.equal('date');

		expect(between.fake).to.exist;
		expect(between).to.respondTo('fake');
		expect(between.fake()).to.be.a('date');

		expect(between.required).to.exist;
		expect(between.required).to.be.true;
	});

	it('should generate recent type', function () {
		var recent = types.recent({required: true});

		expect(recent.type).to.exist;
		expect(recent.type).to.equal('date');

		expect(recent.fake).to.exist;
		expect(recent).to.respondTo('fake');
		expect(recent.fake()).to.be.a('date');

		expect(recent.required).to.exist;
		expect(recent.required).to.be.true;
	});

	it('should generate month type', function () {
		var month = types.month({required: true});

		expect(month.type).to.exist;
		expect(month.type).to.equal('string');

		expect(month.fake).to.exist;
		expect(month).to.respondTo('fake');
		expect(month.fake()).to.be.a('string');

		expect(month.required).to.exist;
		expect(month.required).to.be.true;
	});

	it('should generate weekday type', function () {
		var weekday = types.weekday({required: true});

		expect(weekday.type).to.exist;
		expect(weekday.type).to.equal('string');

		expect(weekday.fake).to.exist;
		expect(weekday).to.respondTo('fake');
		expect(weekday.fake()).to.be.a('string');

		expect(weekday.required).to.exist;
		expect(weekday.required).to.be.true;
	});
});
