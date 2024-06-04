const {FoodInTake} = require('../models/index');


class FoodInTakeRepository{
    constructor(){}

    async addFoodInTake({ Date,FoodName,Calories,Quantity,Fat,Protein,Carbohydrates,Sugar}) {
        try {
          const addFood = await FoodInTake.create({ Date,FoodName,Calories,Quantity,Fat,Protein,Carbohydrates,Sugar});
          return addFood;
        } catch (error) {
          console.log(error);
          throw {error};
        }
    }
}

module.exports = FoodInTakeRepository;