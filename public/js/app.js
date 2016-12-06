angular.module("letEmPlayApp", ["ngRoute"])
  .config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: "HomeController"
    })
    .when('/donate', {
      templateUrl: 'templates/donate.html',
      controller: "DonateController"
    })
    .when('/donation/:donation_id', {
      templateUrl: 'templates/donation.html',
      controller: "DonationController"
    })
    .when('/find', {
      templateUrl: 'templates/find.html',
      controller: "FindController"
    })
    .when('/find/:method/:value', {
      templateUrl: 'templates/find.html',
      controller: "FindController"
    })
    .when('/find/*', {
      templateUrl: 'templates/find.html',
      controller: "FindController"
    })
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: "LoginController"
    })
  })
