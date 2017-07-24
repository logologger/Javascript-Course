var app=angular.module("chatApp")

.controller("userCreateController",function($scope,$rootScope){

	$scope.username=undefined;

	$scope.createUser=function(newUser){
		//add the logic to create User

		//$scope.username=newUser;

		$rootScope.$emit('new-user',newUser);



	}


})