var app = angular.module("first_module", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when("/", { //default route to our application

            templateUrl: "start.html"
        })
        .when("/aboutus", {
            templateUrl: "aboutus.html"
        })
        .when("/studentData", {
            templateUrl: "students/studentData.html",
            controller: "first_controller"


        })
        .when("/classData", {
            templateUrl: "class/classData.html",
            controller: "class_controller"
        });





});
