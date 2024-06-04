'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorkoutLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      WorkOutDate: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      WorkOutType: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      WorkOutName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      Minutes: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      CalculateBurnt: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      StartTime: {
        type: Sequelize.STRING,
        allowNull:false,
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
    await queryInterface.dropTable('WorkoutLogs');
  }
};