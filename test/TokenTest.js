var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var Token = require('../lib/Token');

describe('Token', function() {
	describe('constructor', function() {
		it ('should set the type from the rawToken', function() {
			var newToken =  new Token({
				token: "someToken"
			});
			expect(newToken.type).to.equal("someToken");
		});
		it ('should set the attributeValue from the rawToken', function() {
			var newToken = new Token({
				attributeValue: "someAttributeValue"
			});
			expect(newToken.attributeValue).to.equal("someAttributeValue");
		});
	});
	describe('getMetadata', function() {
		it ('', function() {

		});
	});
	describe('toObject', function() {
		it ('', function() {

		});
	});
});