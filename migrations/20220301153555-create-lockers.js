'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LOCKERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lockerEncoding: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(20)
      },
      cardId: {
        type: Sequelize.STRING(10)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LOCKERs');
  }
};