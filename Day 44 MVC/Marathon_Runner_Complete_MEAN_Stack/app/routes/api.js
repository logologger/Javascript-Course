var User=require('../models/User');
var userController=require('../controller/User/userController');
var loginController=require('../controller/login/loginController');
module.exports=function(app,express)
{
    var api=express.Router();
   
   //LoginController
    api.post('/register',userController.registerUser);
    api.post('/login',loginController.doLogin);
 	
 	return api;
}