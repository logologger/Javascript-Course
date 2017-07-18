var app=angular.module("myApp");

app.controller("LoginCtrl",function($scope,$state){

$scope.loginFormValue={};

$scope.checkLogin=function(){

	//
	//console.log($scope.loginFormValue);
	//Send the json to nodeJS Server and then NodeJS should 
	//validate with MongoDB Login Collection and if it is true 
	//then it should redirect to DashBoard Page
	$state.go('dashboard');

}


});