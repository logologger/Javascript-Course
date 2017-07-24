var User=require('../../models/login');
var login={
    
    doLogin:function(req,res){
      var user_provided_email = req.body.email;
	  var user_provided_password=req.body.password;

	  User.find({"email":user_provided_email,"password":user_provided_password},function(err,data){

	  		if(err){
	  			return;
	  		}
	  		console.log("login data"+typeof data);
	  		var response_json={};
	   		if(data.length>0){

	   			//means the email and password are valid
	   			
	   			response_json.message="success";
	   			res.json(response_json);

	   		}
	   		else{
	   			response_json.message="failed";
	   			res.json(response_json);

	   		}


	  });


      //logic for DB insertion or some find Query for fetching the DB

     

    	
    }
};
 module.exports=login;