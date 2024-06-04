const LoginRepository = require("./login_repository");
const RegisterRepository = require("./register_repository");
module.exports = {
    LoginRepository: require('./login_repository'),
    RegisterRepository:require('./register_repository'),
    WorkOutLogRepository:require('./workoutlog_repository'),
    WaterLogRepository:require('./waterlog_repository'),
    FoodInTakeRepository:require('./foodconsume_repository')
}