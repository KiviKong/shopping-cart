/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app/server');

chai.should();
chai.use(chaiHttp);

describe('Amount', () => {
    describe('POST /amount', () => {
        it('it should return the total amount to be paid', async () => {
            let response = await chai.request(server)
            .post('/amount')
            .set('Content-type', 'application/json')
            .set('Authorization', 'Basic ZnVsYW5pdG86YmVzdGFwaWV2ZXI=')
            .set('accept-encoding', 'gzip, deflate')
            .send({codes: ['PANTS', 'TSHIRT', 'PANTS']});
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.body.should.have.property('total');
        });
        it('it should return Unauthorized (status 401)', async () => {
            let response = await chai.request(server)
            .post('/amount')
            .set('Content-type', 'application/json')
            .send({codes: ['PANTS', 'TSHIRT', 'PANTS']});
            response.should.have.status(401);
        });
        it('it should return Bad request information (status 400)', async () => {
            let response = await chai.request(server)
            .post('/amount')
            .set('Content-type', 'application/json')
            .set('Authorization', 'Basic ZnVsYW5pdG86YmVzdGFwaWV2ZXI=')
            .set('accept-encoding', 'gzip, deflate');
            response.should.have.status(400);
            response.body.should.be.a('object');
            response.body.should.have.property('message').eql('Bad request information');
        });
    });
});
