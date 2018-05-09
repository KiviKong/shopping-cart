const Sequelize = require('sequelize');
const models = {
    users: {
        userName: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        apiKey: {
          type: Sequelize.STRING,
          allowNull: false,
        },
    },
    items: {
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
    },
    promotions: {
        idPromotion: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    items_promotions: { // This is a weak entity
        code: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        idPromotion: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
    },
};

module.exports = models;
