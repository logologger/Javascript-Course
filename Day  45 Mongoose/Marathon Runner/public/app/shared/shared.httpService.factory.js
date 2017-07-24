var app = angular.module("myApp")

app.factory("serviceFactory",function($scope){

	return {

		postRequest:function(url,callback){

			//$http.post code 

			$http.post(url).then(function(data){


				callback(data);
				//success callback
			},function(){

				//error callback
			})



		},
		getRequest:function(){

			//$http.get code



		}

	}




});