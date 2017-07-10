var MongoClient = require('mongodb').MongoClient; //Driver 

//it just like a Client that will connect your MongoDB with NodeJS

//MongoClient will get an instance that will help you connect to MongoDB


MongoClient.connect("mongodb://localhost:27017/food_truck", function (err, db) {
   
   
    if(err){
		
    	return ;
    }


    console.log("NodeJS got connected with MongoDB");

    db.collection('indian_dish',function(err,collection){

    	if(err){
    		return err;
    	}
    	console.log("Working on Collection indian_dish");
    	collection.find({},{_id:0,name:1}).toArray(function(err,data){

    		console.log(data);
    		
    	});
    	// for(var i=0;i<5000;i++)

    	var json_from_angular={ //coming from the front end

		name:'Mahesh Babu',
		email:'jj@jj.com',
		phone:'9451401875',
		company:'toyoto'
	};
    	 	collection.insert(json_from_angular);

    	//collection.remove({'name':'Noodles'});



    });


    //  if(err) throw err;

    //  //Write databse Insert/Update/Query code here..

    //  console.log("Got connected to DB");

    //  db.collection('indian_dish', function (err, collection) {
        
    //     var output= collection.insert({ id: 1, name: 'Cheese Pizza', cost: '50$' });
    //     //console.log("inserted" +output);

    //     collection.find({}).toArray(function(err,data){
    //     	console.log(data);
    //     });
    // });

     // db.collection({name: 'Cheese Pizza'}, function(err, document) {
  			// console.log(document.name);
});
                
