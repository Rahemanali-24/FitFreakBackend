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

     async deleteWaterLog(id){
        try{
            const deleteWaterLog = await this.waterLogRepository.deleteWaterLog(id);
            return deleteWaterLog;
        }catch(err){
            console.log("Something went wrong at service layer for delete Log");
            throw err;
        }
     }

     async updateWaterLog(id, data) {
        try {
            const response = await this.waterLogRepository.updateWaterLog(id, data);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports=WaterLogService;