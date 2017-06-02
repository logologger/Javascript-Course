setInterval(function(){

    	// color=shuffle(color);

       
        // document.getElementById("color_text1").style.backgroundColor = color[0];
        // document.getElementById("color_text2").style.backgroundColor = color[1];
        // document.getElementById("color_text3").style.backgroundColor = color[2];
        // document.getElementById("color_text4").style.backgroundColor = color[3];

        //window.navigator.onLine  --- 

        //take the button --- change the color of button to green --online --treue

        //red

        if(navigator.onLine){
            //true means user is online

            document.getElementById("colorChange").style.backgroundColor="green";


        }
        else{

            //user is offline
            document.getElementById("colorChange").style.backgroundColor="red";
        }






    },1000);

//Execute the function after 5 second

setTimeout(function(){

    alert("Welcome to the Color Shuflling Website");
    document.getElementById("img_popUp").style.display="block";

},5000);


    var btn_id = document.getElementById("colorChange");



    var color = [ "red","green", "blue", "yellow"];

    //length of the array 
    //array_name.length


    btn_id.addEventListener("click", function() {

    	color=shuffle(color);

        try{

            //WE are iterating over color array

            /*
                    var i=0 -----Initialization 



            */
        

        for(var i=0;i<color.length;i++){

            var block_id="color_text"+(i+1);    //Dynamic ID's for each div element 



             document.getElementById(block_id).style.backgroundColor = color[i];



        }
            // document.getElementById("color_text1").style.backgroundColor = color[0];
            // document.getElementById("color_text2").style.backgroundColor = color[1];
            // document.getElementById("color_text3").style.backgroundColor = color[2];//error at this line
            // document.getElementById("color_text4").style.backgroundColor = color[3];//stop working

            //alert("Thanks for using this color shuffler");
        }
        catch(exception){

            console.log("there is some Error in the styling code "+exception);
        }
        finally{

            //The code that should get executed at any cost irrespective of any errors

            console.log("Thanks for using this color shuffler from the finally block"); //At any case this alert box will get executed


        }



    });





    function shuffle(array) {//array is color
        var tmp, current, top = array.length;// 

        if (top){
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));//2
               
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }
        return array;
    }


    function testDoWhileLoop(){

        var t=10;
        do{ 
            console.log(t);//10 
            t--;

        }while(t>0);

    }

