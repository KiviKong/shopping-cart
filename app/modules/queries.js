const Sequelize = require('sequelize');
const sequelizeConfig = require('./../../config/sequelize/config');
const models = require('./models');

let sequelize = null;

const tables = {
    users: null,
    items: null,
    promotions: null,
    items_promotions: null
}

const startConnection = () => {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, sequelizeConfig);
    tables.users = sequelize.define('users', models.users);
    tables.items = sequelize.define('items', models.items);
    tables.promotions = sequelize.define('promotions', models.promotions);
    tables.items_promotions = sequelize.define('items_promotions', models.items_promotions);
    tables.items_promotions.belongsTo(tables.items, {foreignKey: 'code'});
    tables.items_promotions.belongsTo(tables.promotions, {foreignKey: 'idPromotion'});
}

const closeConnection = () => {
    sequelize.close();
}

// Standard queries that all components can use, it's important to close the connection at the end of each query.
// After close the connection, the garbage collector come to the rescue, we are safe.
const queries = {
    getAll: async (table, attributes) => {
        try {
            startConnection();
            let elements = await tables[table].findAll({attributes: attributes, raw: true});
            closeConnection();
            return elements;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    getOne: async (table, condition, attributes) => {
        try {
            startConnection();
            let element = await tables[table].findOne({where: condition, attributes: attributes, raw: true});
            closeConnection();
            return element;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    insertOne: async (table, newElement) => {
        try {
            startConnection();
            let succes = await tables[table].create(newElement);
            closeConnection();
            return succes.toJSON();
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    dropTable: async (table) => {
        try {
            startConnection();
            await tables[table].sync({force: true});
            closeConnection();
            return true;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
    startConnection: startConnection,
    closeConnection: closeConnection
};

module.exports = queries;
