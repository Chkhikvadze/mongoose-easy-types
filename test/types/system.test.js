var types = require('../../src/types/system');
var expect = require('chai').expect;


describe('tests for system types', function () {
	"use strict";

	it('should generate fileName type', function () {
		var fileName = types.fileName({required: true});

		expect(fileName.type).to.exist;
		expect(fileName.type).to.equal('string');

		expect(fileName.fake).to.exist;
		expect(fileName).to.respondTo('fake');
		expect(fileName.fake()).to.be.a('string');

		expect(fileName.required).to.exist;
		expect(fileName.required).to.be.true;
	});

	it('should generate commonFileName type', function () {
		var commonFileName = types.commonFileName({required: true});

		expect(commonFileName.type).to.exist;
		expect(commonFileName.type).to.equal('string');

		expect(commonFileName.fake).to.exist;
		expect(commonFileName).to.respondTo('fake');
		expect(commonFileName.fake()).to.be.a('string');

		expect(commonFileName.required).to.exist;
		expect(commonFileName.required).to.be.true;
	});

	it('should generate mimeType type', function () {
		var mimeType = types.mimeType({required: true});

		expect(mimeType.type).to.exist;
		expect(mimeType.type).to.equal('string');

		expect(mimeType.fake).to.exist;
		expect(mimeType).to.respondTo('fake');
		expect(mimeType.fake()).to.be.a('string');

		expect(mimeType.required).to.exist;
		expect(mimeType.required).to.be.true;
	});

	it('should generate commonFileType type', function () {
		var commonFileType = types.commonFileType({required: true});

		expect(commonFileType.type).to.exist;
		expect(commonFileType.type).to.equal('string');

		expect(commonFileType.fake).to.exist;
		expect(commonFileType).to.respondTo('fake');
		expect(commonFileType.fake()).to.be.a('string');

		expect(commonFileType.required).to.exist;
		expect(commonFileType.required).to.be.true;
	});

	it('should generate commonFileExt type', function () {
		var commonFileExt = types.commonFileExt({required: true});

		expect(commonFileExt.type).to.exist;
		expect(commonFileExt.type).to.equal('string');

		expect(commonFileExt.fake).to.exist;
		expect(commonFileExt).to.respondTo('fake');
		expect(commonFileExt.fake()).to.be.a('string');

		expect(commonFileExt.required).to.exist;
		expect(commonFileExt.required).to.be.true;
	});

	it('should generate fileType type', function () {
		var fileType = types.fileType({required: true});

		expect(fileType.type).to.exist;
		expect(fileType.type).to.equal('string');

		expect(fileType.fake).to.exist;
		expect(fileType).to.respondTo('fake');
		expect(fileType.fake()).to.be.a('string');

		expect(fileType.required).to.exist;
		expect(fileType.required).to.be.true;
	});

	it('should generate fileExt type', function () {
		var fileExt = types.fileExt({required: true});

		expect(fileExt.type).to.exist;
		expect(fileExt.type).to.equal('string');

		expect(fileExt.fake).to.exist;
		expect(fileExt).to.respondTo('fake');
		expect(fileExt.fake()).to.be.a('string');

		expect(fileExt.required).to.exist;
		expect(fileExt.required).to.be.true;
	});

	// it('should generate directoryPath type', function () {
	// 	var directoryPath = types.directoryPath({required: true});
    //
	// 	expect(directoryPath.type).to.exist;
	// 	expect(directoryPath.type).to.equal('string');
    //
	// 	expect(directoryPath.fake).to.exist;
	// 	expect(directoryPath).to.respondTo('fake');
	// 	expect(directoryPath.fake()).to.be.a('string');
    //
	// 	expect(directoryPath.required).to.exist;
	// 	expect(directoryPath.required).to.be.true;
	// });
    //
	// it('should generate filePath type', function () {
	// 	var filePath = types.filePath({required: true});
    //
	// 	expect(filePath.type).to.exist;
	// 	expect(filePath.type).to.equal('string');
    //
	// 	expect(filePath.fake).to.exist;
	// 	expect(filePath).to.respondTo('fake');
	// 	expect(filePath.fake()).to.be.a('string');
    //
	// 	expect(filePath.required).to.exist;
	// 	expect(filePath.required).to.be.true;
	// });

	it('should generate semver type', function () {
		var semver = types.semver({required: true});

		expect(semver.type).to.exist;
		expect(semver.type).to.equal('string');

		expect(semver.fake).to.exist;
		expect(semver).to.respondTo('fake');
		expect(semver.fake()).to.be.a('string');

		expect(semver.required).to.exist;
		expect(semver.required).to.be.true;
	});
});
