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



const getFoodIntake = async(req,res)=>{
    try{
        const response = await foodIntakeService.getUserFoodIntake();
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"GetFoodIntake Log Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to getFoodIntake",
            error:error,
        });
    }
}

const deleteFoodInTakeLog = async (req, res) => {
    try {
        const response = await foodIntakeService.deleteUserFoodLog(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a Food Intake log',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the Food Intake log',
            err: error
        });
    }
}





module.exports ={
    addFoodIntake,
    getFoodIntake,
    deleteFoodInTakeLog
}
