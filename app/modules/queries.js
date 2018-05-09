const Sequelize = require('sequelize');
const sequelizeConfig = require('./../../config/sequelize/config');
const models = require('./models');

let sequelize = null;

const tables = {
    users: null,
    items: null,
    promotions: null,
    items_promotions: null,
};

const startConnection = () => {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, sequelizeConfig);
    tables.users = sequelize.define('users', models.users);
    tables.items = sequelize.define('items', models.items);
    tables.promotions = sequelize.define('promotions', models.promotions);
    tables.items_promotions = sequelize.define('items_promotions', models.items_promotions);
    tables.items_promotions.belongsTo(tables.items, {foreignKey: 'code'});
    tables.items_promotions.belongsTo(tables.promotions, {foreignKey: 'idPromotion'});
};

// Standard queries that all components can use, it's important to keep connection.
const queries = {
    getAll: async (table, attributes) => {
        await sequelize.authenticate()
            .catch((err) => {
                startConnection();
            });
        try {
            return await tables[table].findAll({attributes: attributes, raw: true});
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    getOne: async (table, condition, attributes) => {
        await sequelize.authenticate()
            .catch((err) => {
                startConnection();
            });
        try {
            return await tables[table].findOne({where: condition, attributes: attributes, raw: true});
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    insertOne: async (table, newElement) => {
        await sequelize.authenticate()
            .catch((err) => {
                startConnection();
            });
        try {
            return await tables[table].create(newElement).toJSON();
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    dropTable: async (table) => {
        await sequelize.authenticate()
            .catch((err) => {
                startConnection();
            });
        try {
            await tables[table].sync({force: true});
            return true;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
};

startConnection();

module.exports = queries;
