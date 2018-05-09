const Sequelize = require('sequelize');
const models = require('./models');
const sequelizeConfig = require('./../../config/sequelize/config');
let sequelize = null;

// Standard queries that all components can use, it's important to close the connection at the end of each query.
// After close the connection, the garbage collector come to the rescue, we are safe.
const queries = {
    getAll: async (table, attributes) => {
        try {
            sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, sequelizeConfig);
            let elements = await models[table]
                .findAll({attributes: attributes, raw: true});
            sequelize.close();
            return elements;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    getOne: async (table, condition, attributes) => {
        try {
            sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, sequelizeConfig);
            let element = await models[table]
                .findOne({where: condition, attributes: attributes, raw: true});
            sequelize.close();
            return element;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    insertOne: async (table, newElement) => {
        try {
            sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, sequelizeConfig);
            let succes = await models[table]
                .create(newElement);
            sequelize.close();
            return succes.toJSON();
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    dropTable: async (table) => {
        try {
            sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, sequelizeConfig);
            await models[table]
                .sync({force: true});
            sequelize.close();
            return true;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
};

module.exports = queries;
