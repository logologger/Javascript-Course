var express = require('express');
var cors = require('cors'); //Cross Origin Request
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.use(cors()); 

var bodyParser = require('body-parser'); //install it using npm install body-parser
app.use(bodyParser.urlencoded()); //decode it 
app.use(bodyParser.json()); //convert it a json so that it can be used

app.post('/register_user', function(req, res) {
	

//This one will be use for registration purpose 
MongoClient.connect("mongodb://localhost:27017/marathon_runner",function(err,db){

	if(err){
		return;
	}
	db.collection('register_user',function(err,collection){


		 res.setHeader('Content-type', 'application/json');
		collection.insert(req.body,function(err,message){
				if(err){
						return;
				}
			

			var login_data={};

			login_data.email=req.body.email;
			login_data.password=req.body.password;

			//Json login_data that we will insert into the login table

			db.collection('login_fields',function(err,collection){
				if(err){
					return;
				}
				collection.insert(login_data,function(err,data){
					if(err){
						return;

					}
					var msg={};
					msg.message="success";
					res.json(msg);

				});
			});




		


		});

	});

	


});






});

app.post('/login', function(req, res) {

	//This one will be used for login purpose

	//find collection 

var user_provided_email = req.body.email;
var user_provided_password=req.body.password;

MongoClient.connect("mongodb://localhost:27017/marathon_runner",function(err,db){

	if(err){
		return;
	}
	db.collection('login_fields',function(err,collection){

		 if(err){
		 	return;
		 }

		collection.find({"email":user_provided_email,"password":user_provided_password}).toArray(function(err,data){
			//if data is not null then it means user is valid
			//If data is null then it means user is not valid 

			if(err){
				return;
			}

			//data will be an array
			var response_json={};
			if(data.length>0){
				//user is valid
				response_json.result="valid";
			}
			else{
				//user is not valid
				response_json.result="invalid";
			}
			
			res.json(response_json);
		});
	});

});
});

app.get('/getTimeLeft',function(req,res){

	var response_json={};
	MongoClient.connect("mongodb://localhost:27017/marathon_runner",function(err,db){

	if(err){
		return;
	}
	db.collection('time_left',function(err,collection){

		 if(err){
		 	return;
		 }

		 collection.find({}).toArray(function(err,data){

		 	res.json(data[0]);
		 });

		


		});

});

	

});

app.listen(3000);