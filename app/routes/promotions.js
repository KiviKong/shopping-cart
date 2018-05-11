const queries = require('./../modules/queries');
const promotions = {
    getAll: async (req, res) => {
        try {
            res.json(await queries.getAll('promotions', ['idPromotion', 'description']));
        } catch (err) {
            res.send(err);
        }
    },
};

module.exports = promotions;
