function updateData() {
	

	//get the updated data from the server

	var x=new XMLHttpRequest();//object for xmlhttpRequest class



	x.open("GET","https://jsonplaceholder.typicode.com/posts/1",true);
	x.send();

	x.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){


			
			var json_data=JSON.parse(this.responseText);//converted the string to json Object

			document.getElementById("data").innerHTML=json_data.body;


		}
	};




}


// class Car{

// }

//instance or copy that contains this feature of class

//Object of class Car will mercedes,BMW,Hyundai....Objects

//var hyundai=new Car();
//