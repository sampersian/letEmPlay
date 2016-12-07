angular.module("letEmPlayApp")
.controller("HomeController", ["$scope", "$rootScope", "$http", "donationsService", "$location", function($scope, $rootScope, $http, donationsService, $location) {
  $scope.view = {};
 $scope.view.title = "Home Page";
 $rootScope.searchDonations = function() {
   console.log("going to "+'/find/'+$rootScope.searchMethod+'/'+$rootScope.searchValue);
   $location.path('/find/'+$rootScope.searchMethod+'/'+$rootScope.searchValue);
  };
  $scope.view.tryLogin = function() {
    console.log("Trying to log in the user "+$scope.view.loginUser+" with the password of "+$scope.view.loginPassword);
    return false;
  }
  initMap();
  $scope.view.donations = donationsService['items'];
  $scope.view.locations = [];
  for (let d in $scope.view.donations) {
    var formattedAddress = String($scope.view.donations[d].zip).split(' ').join('+');
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+formattedAddress+'&key=AIzaSyAMCg6786tQQUE9PoC4RNbsRswkyRqBbVg')
    .then((data) => {
      $scope.view.donations[d].geoLocation = data.data.results[0].geometry.location;
      console.log($scope.view.donations[d].geoLocation);
    })
    .then(() => {
      console.log($scope.view.donations[d]);
      console.log("trying to create marker");
      addMarker($scope.view.donations[d].geolocation);
    })
  }
}])
.controller("DonateController", ["$scope", function($scope) {
  $scope.view = {};
  $scope.view.title = "Donate Page"
  $scope.view.donation = {};
  $scope.view.donation.items = [];
  $scope.view.donation.newitem = {};
  $scope.view.newDonationItem = function()  {
    if (!$scope.view.donation.newitem.type || !$scope.view.donation.newitem.size) return false;
    $scope.view.donation.items.push($scope.view.donation.newitem);
    $scope.view.donation.newitem = {};
    console.log($scope.view.donation);
  }
  $scope.view.removeDonationItem = function(item) {
    var index = $scope.view.donation.items.indexOf(item);
    $scope.view.donation.items.splice(index, 1); 
    console.log(item);
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
