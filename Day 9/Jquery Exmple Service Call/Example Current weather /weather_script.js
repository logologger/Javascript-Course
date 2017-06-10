$(document).ready(function(){


	$.ajax({
		url:"http://api.openweathermap.org/data/2.5/forecast?id=4684888&APPID=26568301c69f5a5ca9b78127d4e3f153",
		

		success:function(data){


			

			var description=data.list[0].weather[0].description;

			$("#current_weather").html(description);

		},
		error:function(data){

			$("#error_api").html("Error in calling weather Service");


		}




	});

	var city_names=[];


	$.ajax({
		url:'city.list.json',
		success:function(data){

			for(var i=0;i<data.length;i++){


				city_names[i]=data[i].name;
				$("#all_city").append('<option>'+city_names[i]+'</option>');
			}



		},
		error:function(){

		}


})

});