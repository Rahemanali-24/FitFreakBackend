const LoginService = require("./login_service");
const RegisterService = require("./register_service");
module.exports = {
    LoginService: require('./login_service'),
    RegisterService:require('./register_service'),
    WorkOutLogService:require('./workoutlog_service'),
    WaterLogService:require('./waterlog_service'),
    FoodIntakeService:require('./foodconsume_service')
}