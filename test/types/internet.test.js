var types = require('../../src/types/internet');
var expect = require('chai').expect;


describe('tests for internet types', function () {
	"use strict";

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

	it('should generate email type', function () {
		var email = types.email({required: true});

		expect(email.type).to.exist;
		expect(email.type).to.equal('string');

		expect(email.fake).to.exist;
		expect(email).to.respondTo('fake');
		expect(email.fake()).to.be.a('string');

		expect(email.required).to.exist;
		expect(email.required).to.be.true;
	});

	it('should generate exampleEmail type', function () {
		var exampleEmail = types.exampleEmail({required: true});

		expect(exampleEmail.type).to.exist;
		expect(exampleEmail.type).to.equal('string');

		expect(exampleEmail.fake).to.exist;
		expect(exampleEmail).to.respondTo('fake');
		expect(exampleEmail.fake()).to.be.a('string');

		expect(exampleEmail.required).to.exist;
		expect(exampleEmail.required).to.be.true;
	});

	it('should generate userName type', function () {
		var userName = types.userName({required: true});

		expect(userName.type).to.exist;
		expect(userName.type).to.equal('string');

		expect(userName.fake).to.exist;
		expect(userName).to.respondTo('fake');
		expect(userName.fake()).to.be.a('string');

		expect(userName.required).to.exist;
		expect(userName.required).to.be.true;
	});

	it('should generate protocol type', function () {
		var protocol = types.protocol({required: true});

		expect(protocol.type).to.exist;
		expect(protocol.type).to.equal('string');

		expect(protocol.fake).to.exist;
		expect(protocol).to.respondTo('fake');
		expect(protocol.fake()).to.be.a('string');

		expect(protocol.required).to.exist;
		expect(protocol.required).to.be.true;
	});

	it('should generate url type', function () {
		var url = types.url({required: true});

		expect(url.type).to.exist;
		expect(url.type).to.equal('string');

		expect(url.fake).to.exist;
		expect(url).to.respondTo('fake');
		expect(url.fake()).to.be.a('string');

		expect(url.required).to.exist;
		expect(url.required).to.be.true;
	});

	it('should generate domainName type', function () {
		var domainName = types.domainName({required: true});

		expect(domainName.type).to.exist;
		expect(domainName.type).to.equal('string');

		expect(domainName.fake).to.exist;
		expect(domainName).to.respondTo('fake');
		expect(domainName.fake()).to.be.a('string');

		expect(domainName.required).to.exist;
		expect(domainName.required).to.be.true;
	});

	it('should generate domainSuffix type', function () {
		var domainSuffix = types.domainSuffix({required: true});

		expect(domainSuffix.type).to.exist;
		expect(domainSuffix.type).to.equal('string');

		expect(domainSuffix.fake).to.exist;
		expect(domainSuffix).to.respondTo('fake');
		expect(domainSuffix.fake()).to.be.a('string');

		expect(domainSuffix.required).to.exist;
		expect(domainSuffix.required).to.be.true;
	});

	it('should generate domainWord type', function () {
		var domainWord = types.domainWord({required: true});

		expect(domainWord.type).to.exist;
		expect(domainWord.type).to.equal('string');

		expect(domainWord.fake).to.exist;
		expect(domainWord).to.respondTo('fake');
		expect(domainWord.fake()).to.be.a('string');

		expect(domainWord.required).to.exist;
		expect(domainWord.required).to.be.true;
	});

	it('should generate ip type', function () {
		var ip = types.ip({required: true});

		expect(ip.type).to.exist;
		expect(ip.type).to.equal('string');

		expect(ip.fake).to.exist;
		expect(ip).to.respondTo('fake');
		expect(ip.fake()).to.be.a('string');

		expect(ip.required).to.exist;
		expect(ip.required).to.be.true;
	});

	it('should generate userAgent type', function () {
		var userAgent = types.userAgent({required: true});

		expect(userAgent.type).to.exist;
		expect(userAgent.type).to.equal('string');

		expect(userAgent.fake).to.exist;
		expect(userAgent).to.respondTo('fake');
		expect(userAgent.fake()).to.be.a('string');

		expect(userAgent.required).to.exist;
		expect(userAgent.required).to.be.true;
	});

	it('should generate color type', function () {
		var color = types.color({required: true});

		expect(color.type).to.exist;
		expect(color.type).to.equal('string');

		expect(color.fake).to.exist;
		expect(color).to.respondTo('fake');
		expect(color.fake()).to.be.a('string');

		expect(color.required).to.exist;
		expect(color.required).to.be.true;
	});

	it('should generate mac type', function () {
		var mac = types.mac({required: true});

		expect(mac.type).to.exist;
		expect(mac.type).to.equal('string');

		expect(mac.fake).to.exist;
		expect(mac).to.respondTo('fake');
		expect(mac.fake()).to.be.a('string');

		expect(mac.required).to.exist;
		expect(mac.required).to.be.true;
	});

	it('should generate password type', function () {
		var password = types.password({required: true});

		expect(password.type).to.exist;
		expect(password.type).to.equal('string');

		expect(password.fake).to.exist;
		expect(password).to.respondTo('fake');
		expect(password.fake()).to.be.a('string');

		expect(password.required).to.exist;
		expect(password.required).to.be.true;
	});
});
