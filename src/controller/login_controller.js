const {LoginService} = require('../services/index');

const loginService = new LoginService();
const {	StatusCodes} = require('http-status-codes');

const login = async(req,res)=>{
    try{
        const response = await loginService.loginUserAccount(req.body);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"login Successfully",
            error:{},
        });
    }catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to login",
            error:error,
        });
    }
}

module.exports ={
    login,
}
