'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkoutLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkoutLog.init({
    WorkOutDate: {
     type: DataTypes.STRING,
     allowNull:false,
    },
    WorkOutType: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    WorkOutName:{ 
      type:DataTypes.STRING,
      allowNull:false,  
    },
    Minutes:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    CalculateBurnt: {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    StartTime: {
      type: DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'WorkoutLog',
  });
  return WorkoutLog;
};
