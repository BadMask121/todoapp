require('mocha');
require('chai')


const { listUserDetails } = require('../../../src/routes/controller/list');

const assert = require('chai').assert
const expect = require('chai').expect


describe('Testing Our List Page', () => {
    it('can only accept numbers', () => {
        let stringTest = listUserDetails(1)
        let booleanTest = listUserDetails(true)

        assert.isObject(stringTest, "[message]");
        assert.isObject(booleanTest, "[message]");
        expect(stringTest).to.not.be.empty;
        expect(booleanTest).to.be.empty;
    });
});