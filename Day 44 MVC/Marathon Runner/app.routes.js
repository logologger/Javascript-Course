var app=angular.module('appRoutes',['ui.router'])
.config(function($stateProvider, $locationProvider) {

    $stateProvider
    .state('startingPage', {
        url: '/',
        templateUrl: 'app/components/Registration/Register.html',
        controller: 'RegisterCtrl'

    })
  .state('login', {
        url: '/login',
        templateUrl: 'app/components/Login/Login.html',
        controller:'LoginCtrl'
    })
  .state('dashboard',{
    url:'/dashboard',
    templateUrl:'app/components/DashBoard/TimeLeft/Timer.html',
    controller:'TimerCtrl'



  })
  $locationProvider.html5Mode(true);
    //$stateProvider.html5Mode(true);

});

