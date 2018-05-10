/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app/server');
const queries = require('./../app/modules/queries');

chai.should();
chai.use(chaiHttp);

describe('Items', () => {
    describe('GET /items', () => {
        it('it should get all items stored in the database', async () => {
            let items = await queries.getAll('items', ['code']);
            let response = await chai.request(server).get('/items');
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(items.length);
        });
    });
});
