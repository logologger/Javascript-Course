function checkInputs(){
	console.log("Checking inputs");
	//Lets check the email here

	var email=document.getElementById("email").value;
	//Check for null value
	document.getElementById("submit_btn").innerHTML="Submitted";
}

function mouseLeave(){

	document.getElementById("submit_btn").innerHTML="Submit";

}

function loadingDOM(event){

	event.stopPropagation();

	console.log(event);

}

function stopSubmit(event){


	event.stopImmediatePropagation();
}


function stopRemember(event){


	event.stopPropagation();

	//do our stuff here
}

function getLoaded(){

	
	alert("dom get loaded");
}

/*

data format which is used for transfering data was xml



json --javascript object notation




*/

function callServerwithData(event){


	event.preventDefault();


	var json_data={};
	json_data.email=document.getElementById("email").value;
	json_data.password=document.getElementById("pwd").value;
	json_data.timezone=new Date().getTimezoneOffset();






	console.log(json_data);

	//call the server using ajax 


// var json_data={

// 	"email" : "something@gmail.com",
// 	"password" : "something"

// }

}



































/*


var str = "example@gmail.com"; 
var res = str.match(/@.*\./g);

*/