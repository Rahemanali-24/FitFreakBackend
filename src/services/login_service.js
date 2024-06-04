const {LoginRepository} = require('../repository/index');


class LoginService{
    constructor(){
        this.loginRepository = new LoginRepository();
    }


    async loginUserAccount(data){
        try{    

            const login = await this.loginRepository.loginAccount(data);
            return login;

        }catch(error){
            console.log("Something went wrong at service layer for login Account");
            throw error;
        }
     }
}

module.exports=LoginService;