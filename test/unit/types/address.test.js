var types = require('../../../src/types/address');
var expect = require('chai').expect;


describe('tests for address types', function () {
	"use strict";

	it('should generate zipCode type', function () {
		var zipCode = types.zipCode({required: true});

		expect(zipCode.type).to.exist;
		expect(zipCode.type).to.equal('string');

		expect(zipCode.fakePath).to.exist;
		expect(zipCode).to.respondTo('fakePath');
		expect(zipCode.fakePath()).to.be.a('string');

		expect(zipCode.required).to.exist;
		expect(zipCode.required).to.be.true;
	});

	it('should generate city type', function () {
		var city = types.city({required: true});

		expect(city.type).to.exist;
		expect(city.type).to.equal('string');

		expect(city.fakePath).to.exist;
		expect(city).to.respondTo('fakePath');
		expect(city.fakePath()).to.be.a('string');

		expect(city.required).to.exist;
		expect(city.required).to.be.true;
	});

	it('should generate cityPrefix type', function () {
		var cityPrefix = types.cityPrefix({required: true});

		expect(cityPrefix.type).to.exist;
		expect(cityPrefix.type).to.equal('string');

		expect(cityPrefix.fakePath).to.exist;
		expect(cityPrefix).to.respondTo('fakePath');
		expect(cityPrefix.fakePath()).to.be.a('string');

		expect(cityPrefix.required).to.exist;
		expect(cityPrefix.required).to.be.true;
	});

	it('should generate citySuffix type', function () {
		var citySuffix = types.citySuffix({required: true});

		expect(citySuffix.type).to.exist;
		expect(citySuffix.type).to.equal('string');

		expect(citySuffix.fakePath).to.exist;
		expect(citySuffix).to.respondTo('fakePath');
		expect(citySuffix.fakePath()).to.be.a('string');

		expect(citySuffix.required).to.exist;
		expect(citySuffix.required).to.be.true;
	});

	it('should generate streetName type', function () {
		var streetName = types.streetName({required: true});

		expect(streetName.type).to.exist;
		expect(streetName.type).to.equal('string');

		expect(streetName.fakePath).to.exist;
		expect(streetName).to.respondTo('fakePath');
		expect(streetName.fakePath()).to.be.a('string');

		expect(streetName.required).to.exist;
		expect(streetName.required).to.be.true;
	});

	it('should generate streetAddress type', function () {
		var streetAddress = types.streetAddress({required: true});

		expect(streetAddress.type).to.exist;
		expect(streetAddress.type).to.equal('string');

		expect(streetAddress.fakePath).to.exist;
		expect(streetAddress).to.respondTo('fakePath');
		expect(streetAddress.fakePath()).to.be.a('string');

		expect(streetAddress.required).to.exist;
		expect(streetAddress.required).to.be.true;
	});

	it('should generate streetSuffix type', function () {
		var streetSuffix = types.streetSuffix({required: true});

		expect(streetSuffix.type).to.exist;
		expect(streetSuffix.type).to.equal('string');

		expect(streetSuffix.fakePath).to.exist;
		expect(streetSuffix).to.respondTo('fakePath');
		expect(streetSuffix.fakePath()).to.be.a('string');

		expect(streetSuffix.required).to.exist;
		expect(streetSuffix.required).to.be.true;
	});

	it('should generate streetPrefix type', function () {
		var streetPrefix = types.streetPrefix({required: true});

		expect(streetPrefix.type).to.exist;
		expect(streetPrefix.type).to.equal('string');

		expect(streetPrefix.fakePath).to.exist;
		expect(streetPrefix).to.respondTo('fakePath');
		expect(streetPrefix.fakePath()).to.be.a('string');

		expect(streetPrefix.required).to.exist;
		expect(streetPrefix.required).to.be.true;
	});

	it('should generate secondaryAddress type', function () {
		var secondaryAddress = types.secondaryAddress({required: true});

		expect(secondaryAddress.type).to.exist;
		expect(secondaryAddress.type).to.equal('string');

		expect(secondaryAddress.fakePath).to.exist;
		expect(secondaryAddress).to.respondTo('fakePath');
		expect(secondaryAddress.fakePath()).to.be.a('string');

		expect(secondaryAddress.required).to.exist;
		expect(secondaryAddress.required).to.be.true;
	});

	it('should generate county type', function () {
		var county = types.county({required: true});

		expect(county.type).to.exist;
		expect(county.type).to.equal('string');

		expect(county.fakePath).to.exist;
		expect(county).to.respondTo('fakePath');
		expect(county.fakePath()).to.be.a('string');

		expect(county.required).to.exist;
		expect(county.required).to.be.true;
	});

	it('should generate country type', function () {
		var country = types.country({required: true});

		expect(country.type).to.exist;
		expect(country.type).to.equal('string');

		expect(country.fakePath).to.exist;
		expect(country).to.respondTo('fakePath');
		expect(country.fakePath()).to.be.a('string');

		expect(country.required).to.exist;
		expect(country.required).to.be.true;
	});

	it('should generate countryCode type', function () {
		var countryCode = types.countryCode({required: true});

		expect(countryCode.type).to.exist;
		expect(countryCode.type).to.equal('string');

		expect(countryCode.fakePath).to.exist;
		expect(countryCode).to.respondTo('fakePath');
		expect(countryCode.fakePath()).to.be.a('string');

		expect(countryCode.required).to.exist;
		expect(countryCode.required).to.be.true;
	});

	it('should generate state type', function () {
		var state = types.state({required: true});

		expect(state.type).to.exist;
		expect(state.type).to.equal('string');

		expect(state.fakePath).to.exist;
		expect(state).to.respondTo('fakePath');
		expect(state.fakePath()).to.be.a('string');

		expect(state.required).to.exist;
		expect(state.required).to.be.true;
	});

	it('should generate stateAbbr type', function () {
		var stateAbbr = types.stateAbbr({required: true});

		expect(stateAbbr.type).to.exist;
		expect(stateAbbr.type).to.equal('string');

		expect(stateAbbr.fakePath).to.exist;
		expect(stateAbbr).to.respondTo('fakePath');
		expect(stateAbbr.fakePath()).to.be.a('string');

		expect(stateAbbr.required).to.exist;
		expect(stateAbbr.required).to.be.true;
	});

	it('should generate latitude type', function () {
		var latitude = types.latitude({required: true});

		expect(latitude.type).to.exist;
		expect(latitude.type).to.equal('number');

		expect(latitude.fakePath).to.exist;
		expect(latitude).to.respondTo('fakePath');
		expect(latitude.fakePath()).to.be.a('number');

		expect(latitude.required).to.exist;
		expect(latitude.required).to.be.true;
	});

	it('should longitude county type', function () {
		var longitude = types.longitude({required: true});

		expect(longitude.type).to.exist;
		expect(longitude.type).to.equal('number');

		expect(longitude.fakePath).to.exist;
		expect(longitude).to.respondTo('fakePath');
		expect(longitude.fakePath()).to.be.a('number');

		expect(longitude.required).to.exist;
		expect(longitude.required).to.be.true;
	});
});
