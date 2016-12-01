angular.module("letEmPlayApp").controller("HomeController", ["$scope",  function($scope) {
  $scope.view = {};
 $scope.view.title = "Home Page"
}])
.controller("DonateController", ["$scope", function($scope) {
  $scope.view = {};
  $scope.view.title = "Donate Page"
}])
.controller("FindController", ["$scope", function($scope) {
  $scope.view = {};
  $scope.view.title = "Find Page"
}])
.controller("LoginController", ["$scope", "$http", function($scope, $http) {
  $scope.view = {};
  $scope.view.tryLogin = function() {
    alert("Hello");
    console.log("Trying to log in the user "+$scope.view.loginUser+" with the password of "+$scope.view.loginPassword);
    return false;
  }
}])
