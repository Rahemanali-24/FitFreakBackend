const {RegisterRepository} = require('../repository/index');


class RegisterService{
    constructor(){
        this.registerRepository = new RegisterRepository();
    }


    async registerAccount(data){
        try{    

            const register = await this.registerRepository.registerAccount(data);
            return register;

        }catch(error){
            console.log("Something went wrong at service layer for register Account");
            throw error;
        }
     }
}

module.exports=RegisterService;