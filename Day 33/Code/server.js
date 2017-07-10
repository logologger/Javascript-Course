var MongoClient = require('mongodb').MongoClient; //Driver 


MongoClient.connect("mongodb://localhost:27017/food_truck", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..

     console.log("Got connected to DB");

     db.collection('indian_dish', function (err, collection) {
        
        var output= collection.insert({ id: 1, name: 'Cheese Pizza', cost: '50$' });
        //console.log("inserted" +output);
    });
                
});