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
}

module.exports = WorkOutLogRepository;