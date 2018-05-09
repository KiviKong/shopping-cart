const Sequelize = require('sequelize');

// Basic database configuration.
const databaseTools = {
    config: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false,
        operatorsAliases: false,
    },
    users: {
        userName: {
          type: Sequelize.STRING,
        },
        apiKey: {
          type: Sequelize.STRING,
        },
    },
    items: {
        Code: {
            type: Sequelize.STRING,
        },
        Name: {
            type: Sequelize.STRING,
        },
        Price: {
            type: Sequelize.FLOAT,
        },
    },
};

let sequelize = null;

// Standard queries that all components can use, it's important to close the connection at the end of each query.
// After close the connection, the garbage collector come to the rescue, we are safe.
const queries = {
    getAll: async (table, attributes) => {
        try {
            sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, databaseTools.config);
            let elements = await sequelize.define(table, databaseTools[table])
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
            sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, databaseTools.config);
            let element = await sequelize.define(table, databaseTools[table])
                .findOne({where: condition, attributes: attributes, raw: true});
            sequelize.close();
            return element;
        } catch (err) {
            console.log(err);
            return null;
        }
    },
};

module.exports = queries;
