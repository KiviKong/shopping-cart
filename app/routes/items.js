const queries = require('./../modules/queries');

const items = {
    getAll: async (req, res) => {
        try {
            res.json(await queries.getAll('items',['Code', 'Name', 'Price']));
        } catch (err) {
            res.send(err);
        }
    },
};

module.exports = items;