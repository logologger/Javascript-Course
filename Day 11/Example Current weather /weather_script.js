$(document).ready(function() {


    $("#register_box").hide();
    $("#login_page").hide();


	navigator.geolocation.getCurrentPosition(function(pos){


		var lat=pos.coords.latitude;
		var lon=pos.coords.longitude;




    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast?id=4684888&APPID=26568301c69f5a5ca9b78127d4e3f153&lat="+lat+"&lon="+lon,


        success: function(data) {




            var description = data.list[0].weather[0].description;

            $("#current_weather").html(description);

        },
        error: function(data) {

            $("#error_api").html("Error in calling weather Service");


        }




    });

    var city_names = [];


    $.ajax({
        url: 'city.list.json',
        success: function(data) {

            for (var i = 0; i < data.length; i++) {


                city_names[i] = data[i].name;
                $("#all_city").append('<option>' + city_names[i] + '</option>');
            }



        },
        error: function() {

        }


    });

});






});





function initMap() {


	navigator.geolocation.getCurrentPosition(function(pos){


		var lat=pos.coords.latitude;
		var lon=pos.coords.longitude;




	

    var uluru = { lat: lat, lng: lon };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

});



}



function register_function(event){

    event.preventDefault();

    $("#register_box").show();
    $("#current_weather").hide();
    $("#map").hide();


}


function registered_success(){


    $("#register_box").hide();
    $("#login_page").show();


}

function dashboard_call(){

    $("#login_page").hide();

    //Ajax request to map.html

    //return html file

    $.ajax({

        url:"map.html",
        success:function(data){

            console.log(data);
            $("#map_id").html(data);

        }

    })

   // $("#map_id").html(response from xhr request);

    //$("#map").show();
    $("#current_weather").show();

}