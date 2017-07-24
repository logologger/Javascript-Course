var express = require('express');
var cors = require('cors'); //Cross Origin Request
var app = express();
var MongoClient = require('mongodb').MongoClient;
var config=require('./config');
var mongoose=require('mongoose');
var morgan=require('morgan');

console.log(config.database);

app.use(cors()); 

var bodyParser = require('body-parser'); //install it using npm install body-parser
app.use(bodyParser.urlencoded()); //decode it 
app.use(bodyParser.json()); //convert it a json so that it can be used

//Serving Angular Files from NodeJS from Express
mongoose.connect(config.database,function(err)
                {
if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connected to the database");
    }
    
});


app.use(morgan('dev'));//  log the request in terminal
app.use(express.static(__dirname+'/public'));//






var api=require('./app/routes/api')(app,express);
app.use('/api',api);

app.get("*",function(req,res)
       {

        res.sendFile(__dirname+'/public/index.html');
    
});


//Serving Angular Files Ended using Express



app.listen(3005);