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


const getWaterLog = async(req,res)=>{
    try{
        const response = await waterLogService.getUserWaterLog();
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"getWater Log Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to GetWaterLog",
            error:error,
        });
    }
}

const deleteWaterLog = async (req, res) => {
    try {
        const response = await waterLogService.deleteWaterLog(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a waterLog',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
}

module.exports ={
    addWaterLog,
    getWaterLog,
    deleteWaterLog
}
