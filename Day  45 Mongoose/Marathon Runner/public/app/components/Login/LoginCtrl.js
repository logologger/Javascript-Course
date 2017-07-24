var app=angular.module("myApp");

app.controller("LoginCtrl",function($scope,$state,$http){

$scope.loginFormValue={};

$scope.checkLogin=function(){

	//
	//console.log($scope.loginFormValue);
	//Send the json to nodeJS Server and then NodeJS should 
	//validate with MongoDB Login Collection and if it is true 
	//then it should redirect to DashBoard Page
	// var url="/api/login";
	// serviceFactory.postRequest(url,function(data){



	// });


	$http.post('/api/login',$scope.loginFormValue)
	.then(function(response){

		//SuccessCallback 
		if(response.data.message==="success"){
			$state.go('dashboard');
		}
		else{
			alert("Not a Valid User ... Please try again");
		}

	},
	function(){

	});
	
	//$state.go('dashboard');

	//SERVICE API DOCUMENT


	//REQUEST --- {



	//}

	/*

			RESPONSE
			ER Diagram
	*/

}


});