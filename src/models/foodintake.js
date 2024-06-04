'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodInTake extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodInTake.init({
    Date: {
     type: DataTypes.STRING,
     allowNull:false,
    },
    FoodName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    Calories: {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    Quantity: {
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    Fat: {
       type:DataTypes.FLOAT,
       allowNull:false,
    },
    Protein: {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    Carbohydrates: {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    Sugar: {
      type:DataTypes.FLOAT,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'FoodInTake',
  });
  return FoodInTake;
};