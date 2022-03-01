'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class REGISTRATIONS extends Model {
    static associate(models) {
      // define association here
      REGISTRATIONS.belongsTo(models.users, { //來自user的key
        foreignKey: 'phoneNumber',
      });
    }
  }
  REGISTRATIONS.init({
    phoneNumber: DataTypes.STRING,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'REGISTRATIONS',
  });
  return REGISTRATIONS;
};