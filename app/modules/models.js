const Sequelize = require('sequelize');
const sequelizeConfig = require('./../../config/sequelize/config');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, sequelizeConfig);

const users = {
    userName: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    apiKey: {
      type: Sequelize.STRING,
      allowNull: false,
    },
};

const items = {
    code: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
};

const itemModel = sequelize.define('items', items);

const promotions = {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    code: {
        type: Sequelize.STRING,
        references: {
            model: itemModel,
            key: 'code',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
};

const models = {
    users: sequelize.define('users', users),
    items: itemModel,
    promotions: sequelize.define('promotions', promotions),
};


console.log('models se llamó');

module.exports = models;
