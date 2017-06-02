function addtoscreen(operation) {


	
var previous_value = document.getElementById("screen").value;


   //  if (operation === '=') {



 		// document.getElementById("screen").value=eval(previous_value);



   //  } else {

     
   //      document.getElementById("screen").value = previous_value + operation;

   //  }
switch(operation){//c

   		case '='://perform the evaluation of the input box
   			document.getElementById("screen").value=eval(previous_value);
   			break;


   		case 'c': //clear the inputs
   			document.getElementById("screen").value = '';
   			break;

   		case 'b'://user has pressed the back button
   			var screen = document.getElementById("screen").value;
   			screen = screen.substring(0,screen.length-1);
   			document.getElementById("screen").value = screen;
   			break;


   		default:
   			document.getElementById("screen").value = previous_value + operation;

   }



   // //Registration form ---.Name Email Age  -- should not empty 
   // Name 
   // Age should be number seven
   // Email should not be null


   // Email -----> @ . ---- Regular expression




   //next line

    //back button 
    //clear button


  //and && 



  //OR ||


  // if(operation ==='+' && screen="23+43"){

  // 	//if body

  // }


  //   if(operation ==='+' || screen="23+43"){

  // 	//if body

  // }



  //Overview of React and Redux.....flux---webpack

  // react ----jsx--Webpack->js ---- bundle 


  // flux ---->  redux


  // --->

  // data 1----- state 1 --


  // data 2 ---------> state 2







}
