'use strict';
module.exports = (sequelize, DataTypes) => {
  let item = sequelize.define('items', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};
