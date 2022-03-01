'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USERS extends Model {
    static associate(models) {
      // define association here
      USERS.hasOne(
        models.lockers, { // 指定要關聯的 table
        foreignKey: 'cardId' // 指定的 foreignKey name
      });

      USERS.hasOne(
        models.registrations, { // 指定要關聯的 table
        foreignKey: 'phoneNumber' // 指定的 foreignKey name
      });
    }
  }
  USERS.init({
    name: DataTypes.STRING,
    cardId: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'USERS',
  });
  return USERS;
};