const express = require('express');
const LoginController = require('../../controller/login_controller');
const RegisterController = require('../../controller/register_controller');
const WorkOutLogController = require('../../controller/workoutlog_controller');
const WaterLogController = require('../../controller/waterlog_controller');
const FoodIntakeController = require('../../controller/foodconsume_controller');
const router = express.Router();


router.post('/login',LoginController.login);

router.post('/register',RegisterController.create);

router.post('/addWorkOutLog',WorkOutLogController.addWorkout);

router.post('/addWaterLog',WaterLogController.addWaterLog);

router.post('/addFoodIntake',FoodIntakeController.addFoodIntake);


module.exports = router;