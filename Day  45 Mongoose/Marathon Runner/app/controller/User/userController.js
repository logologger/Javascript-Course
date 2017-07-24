var User=require('../../models/User');
var register={
    
    registerUser:function(req,res){
      console.log("Registering the User with data "+req.body);


      //checking for unique email id

      //this.checkEmail(req.body.email);
      var success_data={};
      User.find({"email":req.body.email},function(err,data){

      	if(data.length===0){


      	//logic for DB insertion or some find Query for fetching the DB
      	var user_data=new User(req.body);
      	user_data.save(function(err,resp_data){
      		if(err){
      			console.log(err);
      			return;
      		}
      		
      		success_data.message="success";
      		res.json(success_data);

      	})
      }
      else{
      		success_data.message="User Already Registered";

      		res.json(success_data);
      }
    		




    	});
      },

    checkEmail:function(email){

    	

    }
};
 module.exports=register;