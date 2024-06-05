const {FoodInTakeRepository} = require('../repository/index');


class FoodIntakeService{
    constructor(){
        this.foodInTakeRepository = new FoodInTakeRepository();
    }


    async addUserFoodIntake(data){
        try{    

            const addFoodIntake = await this.foodInTakeRepository.addFoodInTake(data);
            return addFoodIntake;

        }catch(error){
            console.log("Something went wrong at service layer for addFoodIntake");
            throw error;
        }
     }

     async getUserFoodIntake(){
        try{    

            const getFoodIntake = await this.foodInTakeRepository.getFoodIntake();
            return getFoodIntake;

        }catch(error){
            console.log("Something went wrong at service layer for getWater Log");
            throw error;
        }
     }

     async deleteUserFoodLog(id){
        try{
            const deleteFoodLog = await this.foodInTakeRepository.deleteFoodInTakeLog(id);
            return deleteFoodLog;
        }catch(err){
            console.log("Something went wrong at service layer for delete Log");
            throw err;
        }
     }

     async updateUserFoodLog(id, data) {
        try {
            const response = await this.foodInTakeRepository.updateFoodInTakeLog(id, data);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports=FoodIntakeService;