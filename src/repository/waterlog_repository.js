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
}

module.exports = WaterLogRepository;