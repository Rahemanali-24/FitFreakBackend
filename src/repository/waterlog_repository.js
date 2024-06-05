const {WaterLog} = require('../models/index');


class WaterLogRepository{
    constructor(){}

    async addWaterLog({ Date,Quantity,Unit}) {
        try {
          const addWaterLog = await WaterLog.create({ Date,Quantity,Unit});
          return addWaterLog;
        } catch (error) {
          console.log(error);
          throw {error};
        }
    }


    async getWaterLog() {
      try {
          const getWaterLogData = await WaterLog.findAll();
          return getWaterLogData;
      } catch (error) {
          console.log("Something went wrong in getALl Water Log in repository");
          throw error;
      }
  }
}

module.exports = WaterLogRepository;