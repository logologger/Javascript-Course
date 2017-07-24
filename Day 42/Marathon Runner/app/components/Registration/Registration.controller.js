var myApp = angular.module("myApp");
myApp.controller("RegisterCtrl", function ($scope,$state,$http) {


	$scope.formValue={};
	$scope.submitForm=function(){

		//I should get all the json for all the form fields
		//Make a web service call to NodeJS  --- POST (save the data into the database)
		//NodeJS in turn will communicate with MongoDB to save the data

	console.log($scope.formValue);

	//I have all the values inside $scope.formValue

	//I have to send this json using $http to the NodeJS

	/*
		$http.post("url",)


	*/

	$http.post('http://localhost:3000/register_user',$scope.formValue)
	.then(function(data){
		//If the user gets successfully registers then redirect him to login
		$state.go('login');

	},
	function(){

	});

	//redirected to login page when the person registers successfully
	//It should be return inside Successback of $http 


	}



	

});