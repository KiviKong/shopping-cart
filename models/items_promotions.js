'use strict';
// This is a weak entity
module.exports = (sequelize, DataTypes) => {
  let weakEntity = sequelize.define('items_promotions', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    idPromotion: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
  }, {});
  weakEntity.associate = function(models) {
    // associations can be defined here
    weakEntity.belongsTo(models.items, {foreignKey: 'code'});
    weakEntity.belongsTo(models.promotions, {foreignKey: 'idPromotion'});
  };
  return weakEntity;
};
