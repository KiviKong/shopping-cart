const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../../../config/initializers/server');
const queries = require('./../../../app/modules/queries');

let should = chai.should();
chai.use(chaiHttp);

describe('Items', () => {
    describe('GET /items', () => {
        it('it should get all items stored in the database', async () => {
            let items = await queries.getAll('items',['Code', 'Name', 'Price']);
            let response = await chai.request(server).get('/items');
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(items.length);
        });
    });
});