'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FoodInTakes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      Date: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      FoodName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      Calories: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      Quantity: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      Fat: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      Protein: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      Carbohydrates: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      Sugar: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('FoodInTakes');
  }
};