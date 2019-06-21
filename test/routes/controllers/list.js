require('mocha');
require('chai')


const { listUserDetails } = require('../../../src/routes/controller/list');

const assert = require('chai').assert
const expect = require('chai').expect


describe('Testing Our List Page', () => {
    it('can only accept numbers', () => {
        let stringTest = listUserDetails('hellow wrd')
        let booleanTest = listUserDetails(1)

        assert.isObject(stringTest, "[message]");
        assert.isObject(booleanTest, "[message]");
        expect(stringTest).to.be.empty;
        expect(booleanTest).to.be.empty;
    });
});
