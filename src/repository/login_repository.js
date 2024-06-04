
const {Login} = require('../models/index');
class LoginRepository{
    constructor(){}

    async loginAccount({ email,password }) {
        try {
          const login = await Login.create({ email,password });
          return login;
        } catch (error) {
          console.log(error);
          throw {error};
        }
      }
}

module.exports = LoginRepository;