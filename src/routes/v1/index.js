const express = require('express');
const LoginController = require('../../controller/login_controller');
const RegisterController = require('../../controller/register_controller');
const WorkOutLogController = require('../../controller/workoutlog_controller');
const WaterLogController = require('../../controller/waterlog_controller');
const FoodIntakeController = require('../../controller/foodconsume_controller');
const router = express.Router();


//Post Apis
router.post('/login',LoginController.login);
router.post('/register',RegisterController.create);
router.post('/addWorkOutLog',WorkOutLogController.addWorkout);
router.post('/addWaterLog',WaterLogController.addWaterLog);
router.post('/addFoodIntake',FoodIntakeController.addFoodIntake);


//Get Apis
router.get('/getFoodIntake',FoodIntakeController.getFoodIntake);
router.get('/getWorkOutLog',WorkOutLogController.getWorkOut);
router.get('/getWaterLog',WaterLogController.getWaterLog);


//Delete Apis
router.delete('/deleteWaterLog/:id',WaterLogController.deleteWaterLog);
router.delete('/deleteWorkOutLog/:id',WorkOutLogController.deleteWorkOutLog);
router.delete('/deleteFoodIntakeLog/:id',FoodIntakeController.deleteFoodInTakeLog);

module.exports = router;