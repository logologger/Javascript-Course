NodeJS --Runtime Environment 
		--Library (saves your time by not needing to code from scratch)


Runs on Google V8 Engine
FrontEndJS 
Extremely Fast
Create Games

Great Concurrency 
Asynchonous Everything
Almost never blocks
Easy to install and run

NPM -- node package manager

nodeJS as a single Thread
Javascript on the server

__filename
___dirname ---Global Variables


Modules --

Divide your program into moduless

module.exports.function_name= function_name 

Using 
var a= require('./file_name')

a.function_name



module.exports={
	relay:function(){

	},
	another:function(){

	}
}


USing Http Module

var http=require('http');

http.createServer(function(req,res){

response.writeHead(200,{"Content-type":"text/plain"})
response.write("Hello");
	
}).listen(6000);



Fs Module  for file reading operation




fs.readFile('input.txt',function(data){
	

})

var data = fs.readFileSync('in.txt');