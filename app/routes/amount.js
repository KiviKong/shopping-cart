const queries = require('./../modules/queries');
const calculator = require('./../modules/calculator');

const amount = {
    calculate: async (req, res) => {
        try {
            let promotions = await queries.getAll('items_promotions', ['code', 'idPromotion']);
            let price = await queries.getAll('items', ['code', 'price']);
            calculator.calculateTotalAmount(req.body.codes, price, promotions);
            res.json('holis');
        } catch (err) {
            res.send(err);
        }
    },
};

module.exports = amount;
