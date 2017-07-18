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

	



});

app.listen(3000);