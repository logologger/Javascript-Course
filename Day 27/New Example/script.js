var app=angular.module("animation",['ngAnimate']);

app.controller('myCtrl',function($scope){



	$scope.cars=[
	{
		name:'Maruti 800',
		numOfSales:800,
		price:200

	},{
		name:'Maruti Switz',
		numOfSales:800,
		price:200

	},{
		name:'Maruti 100',
		numOfSales:800,
		price:200

	},
	{
		name:'Tata',
		numOfSales:900,
		price:100

	},{
		name:'Ashok Leyland',
		numOfSales:700,
		price:500000

	},
	{
		name:'BMW',
		numOfSales:100,
		price:70000

	},
	{
		name:'Mahindra',
		numOfSales:500,
		price:90000

	},
	{
		name:'Porsche',
		numOfSales:300,
		price:1000

	}
	]
})