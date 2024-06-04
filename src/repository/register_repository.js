const {Register} = require('../models/index');


class RegisterRepository{
    constructor(){}

    async registerAccount({ UserName,Email,Password,Weight,LifeStyle,Goal,Height,BMI,BirthDate,Age,Gender }) {
        try {
          const register = await Register.create({ UserName,Email,Password,Weight,LifeStyle,Goal,Height,BMI,BirthDate,Age,Gender });
          return register;
        } catch (error) {
          console.log(error);
          throw {error};
        }
      }
}

module.exports = RegisterRepository;