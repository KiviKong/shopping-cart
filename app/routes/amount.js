const queries = require('./../modules/queries');
const calculator = require('./../modules/calculator');

const amount = {
    calculate: async (req, res) => {
        try {
            if (typeof req.body.codes !== 'undefined') {
                let promotions = await queries.getAll('items_promotions', ['code', 'idPromotion']);
                let prices = await queries.getAll('items', ['code', 'price']);

                // We could have no promotions, but we must have items prices.
                if (prices.length < 0) {
                    res.json({message: 'Database error'});
                } else {
                    res.json({total: calculator.calculateTotalAmount(req.body.codes, prices, promotions)});
                }
            } else {
                res.status(400).json({message: 'Bad request information'});
            }
        } catch (err) {
            res.send(err);
        }
    },
};

module.exports = amount;
