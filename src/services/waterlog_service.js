const {WaterLogRepository} = require('../repository/index');


class WaterLogService{
    constructor(){
        this.waterLogRepository = new WaterLogRepository();
    }


    async addUserWaterLog(data){
        try{    

            const addWaterLog = await this.waterLogRepository.addWaterLog(data);
            return addWaterLog;

        }catch(error){
            console.log("Something went wrong at service layer for addWaterLog");
            throw error;
        }
     }

     async getUserWaterLog(){
        try{    

            const getWaterLog = await this.waterLogRepository.getWaterLog();
            return getWaterLog;

        }catch(error){
            console.log("Something went wrong at service layer for getWater Log");
            throw error;
        }
     }
}

module.exports=WaterLogService;