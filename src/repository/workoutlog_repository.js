const {WorkoutLog} = require('../models/index');


class WorkOutLogRepository{
    constructor(){}

    async addWorkOutLog({ WorkOutDate,WorkOutType,WorkOutName,Minutes,CalculateBurnt,StartTime}) {
        try {
          const addWorkout = await WorkoutLog.create({ WorkOutDate,WorkOutType,WorkOutName,Minutes,CalculateBurnt,StartTime});
          return addWorkout;
        } catch (error) {
          console.log(error);
          throw {error};
        }
    }

 

    async getWorkOutLog() {
      try {
          const getWorkOut = await WorkoutLog.findAll();
          return getWorkOut;
      } catch (error) {
          console.log("Something went wrong in getALl in repository");
          throw error;
      }
  }
}

module.exports = WorkOutLogRepository;