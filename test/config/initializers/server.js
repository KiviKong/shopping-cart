require('dotenv').config({path: './config/environments/development.env'});
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../../../config/initializers/server');
const pjson = require('./../../../package.json');

let should = chai.should();
chai.use(chaiHttp);

describe('Endpoints', () => {
    describe('GET /', () => {
        it('it should GET API name and version', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('API_name').eql(pjson.name);
                    res.body.should.have.property('API_version').eql(pjson.version);
                    done();
                });
        });
    });
});