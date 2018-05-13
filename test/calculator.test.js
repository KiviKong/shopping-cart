/* eslint-env node, mocha */
const chai = require('chai');
const calculator = require('./../app/modules/calculator');
chai.should();

describe('Calculator', () => {
    describe('calculateTotalAmount', () => {
        it('receive [PANTS, TSHIRT, PANTS, PANTS, HAT, TSHIRT, TSHIRT] should return 74.5', async () => {
            let total = calculator.calculateTotalAmount(
                    ['PANTS', 'TSHIRT', 'PANTS', 'PANTS', 'HAT', 'TSHIRT', 'TSHIRT'],
                    [{code: 'PANTS', price: 5},
                    {code: 'TSHIRT', price: 20},
                    {code: 'HAT', price: 7.5}],
                    [{code: 'PANTS', idPromotion: '2-for-1'},
                    {code: 'TSHIRT', idPromotion: 'bulk'}]);
            total.should.be.eql(74.5);
        });

        it('receive [PANTS, TSHIRT, PANTS] should return 25', async () => {
            let total = calculator.calculateTotalAmount(
                ['PANTS', 'TSHIRT', 'PANTS'],
                [{code: 'PANTS', price: 5},
                {code: 'TSHIRT', price: 20},
                {code: 'HAT', price: 7.5}],
                [{code: 'PANTS', idPromotion: '2-for-1'},
                {code: 'TSHIRT', idPromotion: 'bulk'}]);
            total.should.be.eql(25);
        });

        it('receive [] (empty arrays) should return 0', async () => {
            let total = calculator.calculateTotalAmount();
            total.should.be.eql(0);
        });

        it('receive [SCARF, SHOES, SOCKS] should return 0 because this codes are not stored in the db', async () => {
            let total = calculator.calculateTotalAmount(
                ['SCARF', 'SHOES', 'SOCKS'],
                [{code: 'PANTS', price: 5},
                {code: 'TSHIRT', price: 20},
                {code: 'HAT', price: 7.5}],
                [{code: 'PANTS', idPromotion: '2-for-1'},
                {code: 'TSHIRT', idPromotion: 'bulk'}]);
            total.should.be.eql(0);
        });
    });
});
