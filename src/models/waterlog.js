'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WaterLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WaterLog.init({
    Date: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    Quantity:{
      type: DataTypes.FLOAT,
      allowNull:false,
    },
    Unit: {
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'WaterLog',
  });
  return WaterLog;
};