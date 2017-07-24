var User=require('../../models/User');
var register={
    
    registerUser:function(req,res){
      console.log("Registering the User");


      //logic for DB insertion or some find Query for fetching the DB

      	var userJson={};
      	userJson.user="Sample";

    	 res.json(userJson);
    }
};
 module.exports=register;