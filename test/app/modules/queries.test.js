/* eslint-env node, mocha */
// path should never be changed to the production.env file.
// Even so, we do not have super user permissions, I hope.
require('dotenv').config({path: './config/environments/development.env'});
const assert = require('assert');
const queries = require('./../../../app/modules/queries');

const itemTest = {code: 'PANTS', name: 'Pants', price: 5};

describe('Queries', () => {
  describe('getAll', () => {
    it('Should return 3 elements, t-shirt, pants and hat', async () => {
      let users = await queries.getAll('items', ['code']);
      return assert.equal(users.length, 3);
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
