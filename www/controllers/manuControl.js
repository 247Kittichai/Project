angular.module('Project')

.controller('manuControl',function($scope,$state) {
  console.log('MANU START.');

  $scope.btngosubject = function () {
    console.log('subject pressed.');
    $state.go('subject');
  }

  $scope.btngoactivities = function () {
    console.log('activities pressed.');
    $state.go('activities');
  }

  $scope.btnBack = function () {
    console.log('Back pressed');
    $state.go('login');
  }

  $scope.btngoTeachersubject = function () {
    console.log('Teachersubject pressed.');
    $state.go('Teachersubject');
  }
})
