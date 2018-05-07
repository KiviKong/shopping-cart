// This route should never change to the production.env file. Even so, we do not have super user permissions, I hope.
require('dotenv').config({path: './config/environments/development.env'});
const assert = require('assert');
const queries = require('./../../app/modules/queries');

describe('Queries', () => {

  // Before each test we drop the users table.
  beforeEach( async () => { 
    return await queries.dropTable('items');
  }); 

  describe('getAll', () => {
    it('should return 0 elements because the table items was dropped before', async () => {
      let users = await queries.getAll('items', ['Code', 'Name']);
      return assert.equal(users.length, 0);
    });
  });

  describe('insertOne', () => {
    it('the inserted item and the returned item should be the same', async () => {
      let item = {Code: 'PANTS', Name: 'Pants', Price: 5};
      let newItem = await queries.insertOne('items', item);
      return assert.equal(item.Code, newItem.Code) && assert.equal(item.Name, newItem.Name) && assert.equal(item.Price, newItem.Price);
    });
  });

});
