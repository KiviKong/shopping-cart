const queries = require('./../modules/queries');
const calculator = require('./../modules/calculator');

const amount = {
    calculate: async (req, res) => {
        try {
            let promotions = await queries.getAll('items_promotions', ['code', 'idPromotion']);
            let prices = await queries.getAll('items', ['code', 'price']);
            res.json({total: calculator.calculateTotalAmount(req.body.codes, prices, promotions)});
        } catch (err) {
            res.send(err);
        }
    },
};

module.exports = amount;
