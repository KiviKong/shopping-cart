'use strict';
module.exports = (sequelize, DataTypes) => {
  let weakEntity = sequelize.define('items_promotions', { // This is a weak entity
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'items',
          key: 'code',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    idPromotion: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {
          model: 'promotions',
          key: 'idPromotion',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
  }, {});
  weakEntity.associate = function(models) {
    // associations can be defined here
    weakEntity.belongsTo(models.items);
    weakEntity.belongsTo(models.promotions);
  };
  return weakEntity;
};
