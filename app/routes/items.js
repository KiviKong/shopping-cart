const queries = require('./../modules/queries');

const items = {
    getAll: async (req, res) => {
        try {
            res.json(await queries.getAll('items',['code', 'name', 'price']));
        } catch (err) {
            res.send(err);
        }
    },
};

module.exports = items;