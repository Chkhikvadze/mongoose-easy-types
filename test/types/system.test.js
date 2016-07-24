var types = require('../../src/types/system');
var expect = require('chai').expect;


describe('tests for system types', function () {
	"use strict";

	it('should generate fileName type', function () {
		var fileName = types.fileName({required: true});

		expect(fileName.type).to.exist;
		expect(fileName.type).to.equal('string');

		expect(fileName.fakePath).to.exist;
		expect(fileName).to.respondTo('fakePath');
		expect(fileName.fakePath()).to.be.a('string');

		expect(fileName.required).to.exist;
		expect(fileName.required).to.be.true;
	});

	it('should generate commonFileName type', function () {
		var commonFileName = types.commonFileName({required: true});

		expect(commonFileName.type).to.exist;
		expect(commonFileName.type).to.equal('string');

		expect(commonFileName.fakePath).to.exist;
		expect(commonFileName).to.respondTo('fakePath');
		expect(commonFileName.fakePath()).to.be.a('string');

		expect(commonFileName.required).to.exist;
		expect(commonFileName.required).to.be.true;
	});

	it('should generate mimeType type', function () {
		var mimeType = types.mimeType({required: true});

		expect(mimeType.type).to.exist;
		expect(mimeType.type).to.equal('string');

		expect(mimeType.fakePath).to.exist;
		expect(mimeType).to.respondTo('fakePath');
		expect(mimeType.fakePath()).to.be.a('string');

		expect(mimeType.required).to.exist;
		expect(mimeType.required).to.be.true;
	});

	it('should generate commonFileType type', function () {
		var commonFileType = types.commonFileType({required: true});

		expect(commonFileType.type).to.exist;
		expect(commonFileType.type).to.equal('string');

		expect(commonFileType.fakePath).to.exist;
		expect(commonFileType).to.respondTo('fakePath');
		expect(commonFileType.fakePath()).to.be.a('string');

		expect(commonFileType.required).to.exist;
		expect(commonFileType.required).to.be.true;
	});

	it('should generate commonFileExt type', function () {
		var commonFileExt = types.commonFileExt({required: true});

		expect(commonFileExt.type).to.exist;
		expect(commonFileExt.type).to.equal('string');

		expect(commonFileExt.fakePath).to.exist;
		expect(commonFileExt).to.respondTo('fakePath');
		expect(commonFileExt.fakePath()).to.be.a('string');

		expect(commonFileExt.required).to.exist;
		expect(commonFileExt.required).to.be.true;
	});

	it('should generate fileType type', function () {
		var fileType = types.fileType({required: true});

		expect(fileType.type).to.exist;
		expect(fileType.type).to.equal('string');

		expect(fileType.fakePath).to.exist;
		expect(fileType).to.respondTo('fakePath');
		expect(fileType.fakePath()).to.be.a('string');

		expect(fileType.required).to.exist;
		expect(fileType.required).to.be.true;
	});

	it('should generate fileExt type', function () {
		var fileExt = types.fileExt({required: true});

		expect(fileExt.type).to.exist;
		expect(fileExt.type).to.equal('string');

		expect(fileExt.fakePath).to.exist;
		expect(fileExt).to.respondTo('fakePath');
		expect(fileExt.fakePath()).to.be.a('string');

		expect(fileExt.required).to.exist;
		expect(fileExt.required).to.be.true;
	});

	// it('should generate directoryPath type', function () {
	// 	var directoryPath = types.directoryPath({required: true});
    //
	// 	expect(directoryPath.type).to.exist;
	// 	expect(directoryPath.type).to.equal('string');
    //
	// 	expect(directoryPath.fakePath).to.exist;
	// 	expect(directoryPath).to.respondTo('fakePath');
	// 	expect(directoryPath.fakePath()).to.be.a('string');
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
	// 	expect(filePath.fakePath).to.exist;
	// 	expect(filePath).to.respondTo('fakePath');
	// 	expect(filePath.fakePath()).to.be.a('string');
    //
	// 	expect(filePath.required).to.exist;
	// 	expect(filePath.required).to.be.true;
	// });

	it('should generate semver type', function () {
		var semver = types.semver({required: true});

		expect(semver.type).to.exist;
		expect(semver.type).to.equal('string');

		expect(semver.fakePath).to.exist;
		expect(semver).to.respondTo('fakePath');
		expect(semver.fakePath()).to.be.a('string');

		expect(semver.required).to.exist;
		expect(semver.required).to.be.true;
	});
});
