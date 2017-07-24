var User=require('../../models/login');
var login={
    
    doLogin:function(req,res){
      console.log("login the User");


      //logic for DB insertion or some find Query for fetching the DB

      	var userJson={};
      	userJson.user="Sample login";

    	 res.json(userJson);
    }
};
 module.exports=login;