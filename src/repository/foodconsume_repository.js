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

    async getFoodIntake() {
      try {
          const getFoodData = await FoodInTake.findAll();
          return getFoodData;
      } catch (error) {
          console.log("Something went wrong in getALl Food Intake Log in repository");
          throw error;
      }
  }

  async deleteFoodInTakeLog(id) {
    try {
      await FoodInTake.destroy({
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


  async updateFoodInTakeLog(id, data) {
    try {
      await FoodInTake.update(data, {
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}



module.exports = FoodInTakeRepository;