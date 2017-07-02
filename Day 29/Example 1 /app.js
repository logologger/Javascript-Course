var fs = require('fs');//fs stands for File System  in NodeJS

// console.log("Before Reading File");
// //Asynchronous File Reading Operation

// //file reading started
fs.readFile("input_file.txt",function(err,data){

if(err){ //First always handle the Error
	console.log("Error in reading File");
	return;
}

//Then only manipulate or perform calculation logic with data
console.log("\n\n\n\n=====Success====\n\n\n")
console.log(data.toString());


});
// //file reading got ended

// console.log("There are some other tasks i want to do");



//Synchronous File Reading Operation in NodeJS

//Much Simpler and easy to debug and write and analyze code 
console.log("Reading File Started");
var fs_sync_data=fs.readFileSync("input_file.txt");

console.log("Reading file Ended");

//cal
var a=2+4;

console.log("Addition of 2 and 4 gives result as  "+a);

console.log("The Data "+fs_sync_data.toString());


//Asynchoronous 