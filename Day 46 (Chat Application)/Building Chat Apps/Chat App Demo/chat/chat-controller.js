var app=angular.module("chatApp")

.controller("chatController",function($scope,$rootScope){

	$scope.messages=[];
	$scope.newMessage=undefined;
	var socket=window.io('localhost:3000');//connect to your chat server

	$scope.username=undefined;

	$scope.sendMessage=function(){

		var newMessage={

			username:$scope.username,
			message:$scope.newMessage
		};

		socket.emit('new-message',newMessage);

		$scope.newMessage=undefined;



	}

	//Dirty Check 
	//Digest Cycle -- Change Detection Cycle for all the $scope variables 

	socket.on('receive-message',function(msg){

		$scope.$apply(function(){ //Run the Digest Cycle Again
			$scope.messages.push(msg);
		});
	});

	$rootScope.$on('new-user',function(event , newUser){
		$scope.username=newUser;
	})

	$scope.$watch(function(){
		return $scope.username;
	},function(){

		if($scope.username){
			console.log("user name got created ",$scope.username);
		}

	});

	


})