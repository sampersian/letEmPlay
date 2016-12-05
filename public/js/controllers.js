angular.module("letEmPlayApp").controller("HomeController", ["$scope",  function($scope) {
  $scope.view = {};
 $scope.view.title = "Home Page";
 initMap();
}])
.controller("DonateController", ["$scope", function($scope) {
  $scope.view = {};
  $scope.view.title = "Donate Page"
}])
.controller("FindController", ["$scope", function($scope) {
  $scope.view = {};
  $scope.view.title = "Find Page";
  $scope.view.data = [
    {
      "donation_id": 1,
      "pieces": [
        {
          "position": "skater",
          "type": 'shoulder pads',
          "size": 'lg',
          "sex": 'both',
          "brand": 'easton'
        },
        {
          "position": "skater",
          "type": 'helmet',
          "size": 'lg',
          "sex": 'both',
          "brand": 'messier'
        },
        {
          "position": "skater",
          "type": 'gloves',
          "size": '16 inch',
          "sex": 'both',
          "brand": 'ccm'}
      ],
      "zip": 55356
    },
    {
      "donation_id": 2,
      "pieces": [
        {
          "position": "skater",
          "type": 'knee pads',
          "size": '20 inch',
          "sex": 'both',
          "brand": 'bauer'
        },
        {
          "position": "skater",
          "type": 'stick',
          "size": 'intermediate',
          "flex": 85,
          "curve": "sakic",
          "sex": 'both',
          "brand": 'easton'
        },
        {
          "position": "skater",
          "type": 'elbow pads',
          "size": 'lg',
          "sex": 'both',
          "brand": 'ccm'
        },
        {
          "position": "skater",
          "type": 'skates',
          "size": '10',
          "sex": 'mens',
          "brand": 'easton',
          "model": 'vapor v'
        },
        {
          "position": "skater",
          "type": 'breezers',
          "size": 'md',
          "sex": 'both',
          "brand": 'bauer'
        },
        {
          "position": "skater",
          "type": 'skates',
          "size": '9',
          "sex": 'womens',
          "brand": 'bauer',
          "model": "vapor xxxx"
        }
      ],
      "zip": 80202
    },
    {
      "donation_id": 3,
      "pieces": [
        {
          "position": "skater",
          "type": 'elbow pads',
          "size": 'sm',
          "sex": 'both',
          "brand": 'bauer'
        },
        {
          "position": "skater",
          "type": 'helmet',
          "size": 'md',
          "sex": 'both',
          "brand": 'easton'
        },
        {
          "position": "skater",
          "type": 'gloves',
          "size": '14 inch',
          "sex": 'both',
          "brand": 'oakley'}
      ],
      "zip": 80202
    }
  ]
}])
.controller("LoginController", ["$scope", "$http", function($scope, $http) {
  $scope.view = {};
  $scope.view.tryLogin = function() {
    alert("Hello");
    console.log("Trying to log in the user "+$scope.view.loginUser+" with the password of "+$scope.view.loginPassword);
    return false;
  }
}])
