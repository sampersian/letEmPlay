angular.module("letEmPlayApp")
.controller("HomeController", ["$scope", "$rootScope", "$location", function($scope, $rootScope, $location) {
  $scope.view = {};
 $scope.view.title = "Home Page";
 $rootScope.searchDonations = function() {
   alert("hgell")
   console.log("going to "+'/find/'+$rootScope.searchMethod+'/'+$rootScope.searchValue);
   $location.path('/find/'+$rootScope.searchMethod+'/'+$rootScope.searchValue);
};
$scope.view.tryLogin = function() {
  alert("Hello");
  console.log("Trying to log in the user "+$scope.view.loginUser+" with the password of "+$scope.view.loginPassword);
  return false;
}
 initMap();
}])
.controller("DonateController", ["$scope", function($scope) {
  $scope.view = {};
  $scope.view.title = "Donate Page"
  $scope.view.donation = {};
  $scope.view.donation.items = [];
  $scope.view.donation.newitem = {};
  $scope.view.newDonationItem = function()  {
    $scope.view.donation.newitem.type = "a type";
      alert("Trying to add a new item with a type of "+$scope.view.donation.newitem.type);
    $scope.view.donation.items.push($scope.view.donation.newitem);
    $scope.view.donation.newitem = {};
    console.log($scope.view.donation);
  }
}])
.controller("DonationController", ["$scope", "donationsService", "$routeParams", function($scope, donationsService, $routeParams) {
  $scope.view = {};
  $scope.view.title = "Single Donation Page"
  $scope.view.item = {};
  $scope.view.items = donationsService['items'];
  for (let oneItem of $scope.view.items) {
    if (oneItem.donation_id === Number($routeParams.donation_id)) {
      $scope.view.item = oneItem;
    };
  }
  console.log($scope.view.item);
}])
.controller("FindController", ["$scope", "$rootScope", "donationsService", "$routeParams", "$location", function($scope, $rootScope, donationsService, $routeParams, $location) {
  $scope.view = {};
  $scope.view.title = "Find Page";
  $scope.view.items = donationsService['items'];
  console.log("items: ");
  console.log($scope.view.items);
  $scope.view.searchPosition = $location.search()['searchMethod'];
  console.log($location.search());
  if ($routeParams.method !== "undefined") {
    console.log("Method: "+$routeParams.method);
    $scope.view.searchPosition = $routeParams.method;
  }
  if ($routeParams.value !== "undefined") {
    console.log("Value: "+$routeParams.value);
    $scope.view.searchValue = $routeParams.value;
  }
  $rootScope.searchValue = ""
}])
.controller("LoginController", ["$scope", "$http", function($scope, $http) {
  $scope.view = {};
  $scope.view.tryLogin = function() {
    alert("Hello");
    console.log("Trying to log in the user "+$scope.view.loginUser+" with the password of "+$scope.view.loginPassword);
    return false;
  }
}])
