angular.module('Project')

.controller('AddactivitiesControl',function($scope,$state) {
  console.log('Addactivities START.');

  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('Admin');
  }


})
