const {WorkOutLogService} = require('../services/index');

const workOutLogService = new WorkOutLogService();
const {	StatusCodes} = require('http-status-codes');

const addWorkout = async(req,res)=>{
    try{
        const response = await workOutLogService.addUserWorkOutLog(req.body);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"addWorkout Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to addWorkout",
            error:error,
        });
    }
}


const getWorkOut = async(req,res)=>{
    try{
        const response = await workOutLogService.getUserWorkOutLog();
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"getWorkout Log Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to GetWorkout",
            error:error,
        });
    }
}

const deleteWorkOutLog = async (req, res) => {
    try {
        const response = await workOutLogService.deleteWorkOutLog(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a WorkOutLog',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the WorkOutLog',
            err: error
        });
    }
}

const updateWorkOutLog = async (req, res) => {
    try {
        const response = await workOutLogService.updateWorkOutLog(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the WorkOutLog'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the WorkOutLog',
            err: error
        });
    }
}

module.exports ={
    addWorkout,
    getWorkOut,
    deleteWorkOutLog,
    updateWorkOutLog
}
