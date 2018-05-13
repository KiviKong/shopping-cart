/* eslint-env node, mocha */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app/server');
const queries = require('./../app/modules/queries');

chai.should();
chai.use(chaiHttp);

describe('Promotions', () => {
    describe('GET /promotions', () => {
        it('it should get all promotions stored in the database', async () => {
            let promotions = await queries.getAll('promotions', ['idPromotion']);
            let response = await chai.request(server)
            .get('/promotions')
            .set('Authorization', 'Basic ZnVsYW5pdG86YmVzdGFwaWV2ZXI=')
            .set('accept-encoding', 'gzip, deflate');
            response.should.have.status(200);
            response.body.should.be.a('array');
            response.body.length.should.be.eql(promotions.length);
        });
    });
});
