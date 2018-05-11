'use strict';
module.exports = (sequelize, DataTypes) => {
  let promotion = sequelize.define('promotions', {
    idPromotion: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {});
  promotion.associate = function(models) {
    // associations can be defined here
  };
  return promotion;
};
