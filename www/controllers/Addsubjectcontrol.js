angular.module('Project')

.controller('AddsubjectControl',function($scope,$state) {
  console.log('Addsubject START.');

  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('Teacher');
  }





  })
