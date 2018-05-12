const queries = require('./../modules/queries');
const calculator = require('./../modules/calculator');

const amount = {
    calculate: async (req, res) => {
        try {
            let promotions = await queries.getAll('items_promotions', ['code', 'idPromotion']);
            let prices = await queries.getAll('items', ['code', 'price']);

            if (!promotions || !prices) {
                res.json({message: 'Database error'});
            } else {
                if (typeof req.body.codes !== 'undefined') {
                    res.json({total: calculator.calculateTotalAmount(req.body.codes, prices, promotions)});
                } else {
                    res.status(400).json({message: 'Bad request information'});
                }
            }
        } catch (err) {
            res.send(err);
        }
    },
};

module.exports = amount;
