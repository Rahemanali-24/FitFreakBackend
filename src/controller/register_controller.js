const {RegisterService} = require('../services/index');

const registerService = new RegisterService();
const {	StatusCodes} = require('http-status-codes');

const create = async(req,res)=>{
    try{
        const response = await registerService.registerAccount(req.body);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"register Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to Register",
            error:error,
        });
    }
}

module.exports ={
    create,
}
