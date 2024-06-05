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
}

module.exports=FoodIntakeService;