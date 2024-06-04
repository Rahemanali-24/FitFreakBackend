'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserName: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      Password: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      Weight: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      LifeStyle: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      Goal: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      Height: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      BMI: {
        type: Sequelize.FLOAT,
        allowNull:false,
      },
      BirthDate: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      Age: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      Gender: {
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
    await queryInterface.dropTable('Registers');
  }
};