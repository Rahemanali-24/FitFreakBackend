const {WaterLogService} = require('../services/index');

const waterLogService = new WaterLogService();
const {	StatusCodes} = require('http-status-codes');

const addWaterLog = async(req,res)=>{
    try{
        const response = await waterLogService.addUserWaterLog(req.body);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"add Waterlog Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to add Waterlog",
            error:error,
        });
    }
}

module.exports ={
    addWaterLog,
}
