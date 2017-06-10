 $(document).ready(


 	function(){

 		//Success function


	$("p").click(function(){
		alert("You click me ");
	});




 },

 function(){




//Error function




 }



 );


//  function (){

//  }

//  ---things happen  ----- success-----Documents get loaded successful without any error --- successcall-back---function Success
//  ---things dont happen   ------ fail----Document does not gets loaded Network Failure ---Errorcall-back----function error


/*

//Example of Callback function in javascript 


function Torrent_Download_Movie(success,error){

	if(movie_gets_downloaded){
		success();
	}
	else{
		error();
	}

}

function success(){



}
function error(){



}

Torrent_Download_Movie(sucess,error);


*/
