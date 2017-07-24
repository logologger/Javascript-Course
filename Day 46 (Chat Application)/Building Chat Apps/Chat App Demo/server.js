var express = require('express');
var app = express();
var http    = require('http').Server(app);
var io = require('socket.io')(http);//Server Side
//var numOfConnection=0;



console.log("Numeber of Clients are "+clientNumber);

io.on('connection', function(socket){

  console.log("we have a connection to socket.io");
   // numOfConnection++;
   // if(numOfConnection>=2){

  	// //Only Two People are allowed in One Chat Window

  	// console.log("Sorry Only two people are allowed to chat");

  	// return;


   // }
   // else{

   	socket.on('new-message',function(msg){

  	io.emit('receive-message',msg);

  })

   // }
  
  
});

http.listen('3000', function(){
  console.log("we are connected");
});