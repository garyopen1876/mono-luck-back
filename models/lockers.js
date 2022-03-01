'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LOCKERS extends Model {
    static associate(models) {
      // define association here
      LOCKERS.belongsTo(models.users, { //來自user的key
        foreignKey: 'cardId',
      });
    }
  }
  LOCKERS.init({
    lockerEncoding: DataTypes.STRING,
    cardId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LOCKERS',
  });
  return LOCKERS;
};