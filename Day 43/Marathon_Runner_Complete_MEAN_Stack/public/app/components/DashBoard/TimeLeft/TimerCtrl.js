var app=angular.module("myApp");

app.controller("TimerCtrl",function($scope,$state,$interval,$http){


var countDownDate="";
$http.get('http://localhost:3000/getTimeLeft')

.then(
    function(response){ //success callback

    //console.log("Time left is "+JSON.stringify(data));
    countDownDate=response.data.time;

},function(err){ //Error Callback

    console.log(err);

});

//var countDownDate = new Date("Jul 18, 2017 12:00:00").getTime(); //When my race is going to start

var x = $interval(function() {                

    
    var now = new Date().getTime();//Get the Current getTime will give  the milliseconds
    
    
    var distance = countDownDate - now;
    
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
   
    $scope.time_left = days + "days " + hours + "hours "
    + minutes + "minutes " + seconds + "seconds";
    
    if (distance < 0) {
        clearInterval(x);//Will stop the $interval
        $scope.time_left = "Thanks for Participating in Marathon..Wish to see you again";
    }
}, 1000);




});