var express = require('express');
var cors = require('cors'); //Cross Origin Request
var app = express();
var MongoClient = require('mongodb').MongoClient;





//www.facebook.com -- Code get executed

app.use(cors()); //Middleware - allows cors

//facebook.com/ajay --private
//facebook.com/private_link --facebook internal
//facebook.com/secret_link --facebook internal

var bodyParser = require('body-parser'); //install it using npm install body-parser
app.use(bodyParser.urlencoded()); //decode it 
app.use(bodyParser.json()); //convert it a json so that it can be used

app.get('/task', function(req, res) {

    res.setHeader('Content-type', 'application/json');
    MongoClient.connect("mongodb://localhost:27017/todo_task", function(err, db) {


        if (err) {
            return;
        }
        db.collection('task', function(err, collection) {

            if (err) {
                return err;
            }
            collection.find({}, { _id: 0, text: 1, done: 1 }).toArray(function(err, data) {

                console.log(data);
                res.json(data);

            });
        });

    });


});


app.post('/dotask', function(req, res) { //api  //1st call back function

    res.setHeader('Content-type', 'application/json');
    MongoClient.connect("mongodb://localhost:27017/todo_task", function(err, db) { //2nd callback function


        if (err) {
            return;
        }
        db.collection('task', function(err, collection) { //3rd callback

            if (err) {
                return err;
            }
            collection.insert(req.body, function(err, data) { //4th callback

                if (err) {

                    var message = {};
                    message.params = "failed";
                    res.json(message);
                    return;

                }

                console.log(data);
                var message = {};
                message.params = "success";
                res.json(message);

            });
        });

    });









});

app.listen(3000);
