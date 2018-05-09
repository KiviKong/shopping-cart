'use strict';
module.exports = (sequelize, DataTypes) => {
  let user = sequelize.define('users', {
    userName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    apiKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
