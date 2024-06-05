const {WorkOutLogRepository} = require('../repository/index');


class WorkOutLogService{
    constructor(){
        this.workOutLogRepository = new WorkOutLogRepository();
    }


    async addUserWorkOutLog(data){
        try{    

            const addWorkout = await this.workOutLogRepository.addWorkOutLog(data);
            return addWorkout;

        }catch(error){
            console.log("Something went wrong at service layer for GetWorkout");
            throw error;
        }
     }

     async getUserWorkOutLog(){
        try{    

            const getWorkOut = await this.workOutLogRepository.getWorkOutLog();
            return getWorkOut;

        }catch(error){
            console.log("Something went wrong at service layer for getWorkout");
            throw error;
        }
     }
}

module.exports=WorkOutLogService;