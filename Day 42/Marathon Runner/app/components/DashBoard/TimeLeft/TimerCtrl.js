var app=angular.module("myApp");

app.controller("TimerCtrl",function($scope,$state,$interval){





var countDownDate = new Date("Jul 18, 2017 12:00:00").getTime(); //When my race is going to start

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
        clearInterval(x);
        $scope.time_left = "Thanks for Participating in Marathon";
    }
}, 1000);




});