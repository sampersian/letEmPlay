angular.module("letEmPlayApp", ["ngRoute"])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: "HomeController"
    })
    .when('/donate', {
      templateUrl: 'templates/donate.html',
      controller: "DonateController"
    })
    .when('/find', {
      templateUrl: 'templates/find.html',
      controller: "FindController"
    })
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: "LoginController"
    })
  })
