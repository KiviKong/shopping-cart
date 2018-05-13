/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app/server');
const pjson = require('./../package.json');

chai.should();
chai.use(chaiHttp);

describe('Server', () => {
    describe('GET /', () => {
        it('it should get API name and version', async () => {
            let response = await chai.request(server)
            .get('/');
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('API_name').eql(pjson.name);
            response.body.should.have.property('API_version').eql(pjson.version);
        });
    });
});
