var express = require('express');
var cors=require('cors');
var app = express();

app.use(cors());
app.get('/', function(req, res) {

	res.setHeader('Content-type','application/json');

	var json={

		name:'Ajay Gaddam'
	};


    res.json(json);
});
app.get('/google', function(req, res) {
    res.send('Hello Google');
});
app.listen(3000);
