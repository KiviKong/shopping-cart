/* eslint-env node, mocha */
const assert = require('assert');
const chai = require('chai');
const queries = require('./../app/modules/queries');

const itemTest = {code: 'PANTS', name: 'Pants', price: 5};
chai.should();

describe('Queries', () => {
  describe('getAll', () => {
    it('Should return an array of elements', async () => {
      let users = await queries.getAll('items', ['code']);
      users.should.be.a('array');
    });
    it('Should return false because missing arguments', async () => {
      let users = await queries.getAll('', ['']);
      users.should.be.equal(false);
    });
  });

  describe('getOne', () => {
    it('The returned item should be the same that itemTest', async () => {
      let newItem = await queries.getOne('items', {code: 'PANTS'}, ['code', 'name', 'price']);
      return assert.equal(itemTest.code, newItem.code) && assert.equal(itemTest.name, newItem.name)
        && assert.equal(itemTest.price, newItem.price);
    });
  });
});
