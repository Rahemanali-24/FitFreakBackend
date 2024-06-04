const {FoodIntakeService} = require('../services/index');

const foodIntakeService = new FoodIntakeService();
const {	StatusCodes} = require('http-status-codes');

const addFoodIntake = async(req,res)=>{
    try{
        const response = await foodIntakeService.addUserFoodIntake(req.body);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"Added Food In take Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to Add Food Intake",
            error:error,
        });
    }
}

module.exports ={
    addFoodIntake,
}
