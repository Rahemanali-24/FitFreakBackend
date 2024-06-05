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

  async deleteWorkOutLog(id) {
    try {
      await WorkoutLog.destroy({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the delete repository layer");
      throw { error };
    }
  }
}

module.exports = WorkOutLogRepository;