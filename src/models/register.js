'use strict';
const { Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Register.init({
    UserName: {
     type: DataTypes.STRING,
     allowNull:false,
    },
    Email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
    },
    Password: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    Weight: {
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    LifeStyle: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    Goal: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    Height: {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    BMI: {
     type: DataTypes.FLOAT,
     allowNull:false,
    },
    BirthDate: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    Age: {
     type: DataTypes.INTEGER,
     allowNull:false,
    },
    Gender: {
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};