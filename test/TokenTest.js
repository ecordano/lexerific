var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var Token = require('../lib/Token');

describe('Token', function() {
	describe('constructor', function() {
		it ('Should set the type from the rawToken', function() {
			var newToken =  new Token({
				token: "someToken"
			});
			expect(newToken.type).to.equal("someToken");
		});
		it ('Should set the attributeValue from the rawToken', function() {
			var newToken = new Token({
				attributeValue: "someAttributeValue"
			});
			expect(newToken.attributeValue).to.equal("someAttributeValue");
		});
	});
	describe('getMetadata', function() {
		it ('Should return the _meta from the Token', function() {
			var newToken = new Token({
				meta: "someMetadata"
			});
			expect(newToken.getMetadata()).to.equal("someMetadata")
		});
	});
	describe('toObject', function() {
		it ('Should', function() {

		});
	});
});

