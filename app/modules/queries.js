const db = require('./../../models/index');

// Standard queries that all components can use, it's important to keep connection.
const queries = {
    getAll: async (table, attributes) => {
        try {
            return await db.sequelize.models[table].findAll({attributes: attributes, raw: true});
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    getOne: async (table, condition, attributes) => {
        try {
            return await db.sequelize.models[table].findOne({where: condition, attributes: attributes, raw: true});
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    insertOne: async (table, newElement) => {
        try {
            return await db.sequelize.models[table].create(newElement).toJSON();
        } catch (err) {
            console.log(err);
            return false;
        }
    },
    dropTable: async (table) => {
        try {
            await db.sequelize.models[table].sync({force: true});
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
};

module.exports = queries;
