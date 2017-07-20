'use strict';
angular.module('UniApp', []).controller('UniCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('https://data.ny.gov/resource/a5je-8vxp.json').then(function(response) {
    console.log(response.data);
    $scope.uni = response.data;
  });
}]);
