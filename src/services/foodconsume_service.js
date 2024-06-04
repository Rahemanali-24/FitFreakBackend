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
}

module.exports=FoodIntakeService;