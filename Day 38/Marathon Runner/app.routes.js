var app=angular.module('appRoutes',['ui.router'])
.config(function($stateProvider, $locationProvider) {

    $stateProvider
    .state('/', {
        url: '/',
        templateUrl: 'app/components/Registration/Register.html',
        controller: 'RegisterCtrl'

    })
  .state('login', {
        url: '/login',
        templateUrl: 'app/components/Login/login.html',
        isLogin: true
    })
    $locationProvider.html5Mode(true);

});

