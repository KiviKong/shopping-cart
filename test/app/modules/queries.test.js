// path should never be changed to the production.env file.
// Even so, we do not have super user permissions, I hope.
require('dotenv').config({path: './config/environments/development.env'});
const assert = require('assert');
const queries = require('./../../../app/modules/queries');

const itemTest = {Code: 'PANTS', Name: 'Pants', Price: 5};

describe('Queries', () => {
  describe('getAll', () => {
    it('Should return 0 elements because the table was dropped before', async () => {
      let users = await queries.getAll('items', ['Code', 'Name']);
      return assert.equal(users.length, 0);
    });
  });
  
  describe('getOne', () => {
    it('The returned item should be the same that itemTest', async () => {
      let newItem = await queries.getOne('items', {Code: 'PANTS'}, ['Code', 'Name', 'Price']);
      return assert.equal(itemTest.Code, newItem.Code) && assert.equal(itemTest.Name, newItem.Name)
        && assert.equal(itemTest.Price, newItem.Price);
    });
  });
});
