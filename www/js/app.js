// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Project', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider

  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'loginControl'
  })

  .state('about',{
    url:'/about',
    templateUrl:'templates/about.html'
  })

  .state('Signup',{
    url:'/Signup',
    templateUrl:'templates/Signup.html',
    controller:'SignupControl'
  })

  .state('manu',{
    url:'/manu',
    templateUrl:'templates/manu.html',
    controller:'manuControl'
  })

  .state('subject',{
    url:'/subject',
    templateUrl:'templates/subject.html',
    controller:'subjectControl'
  })

  .state('activities',{
    url:'/activities',
    templateUrl:'templates/activities.html',
    controller:'activitiesControl'
  })

  .state('Teacher',{
    url:'/Teacher',
    templateUrl:'templates/Teacher.html',
    controller:'TeacherControl'
  })

  .state('Addsubject',{
    url:'/Addsubject',
    templateUrl:'templates/Addsubject.html',
    controller:'AddsubjectControl'
  })

  .state('Teachersubject',{
    url:'/Teachersubject',
    templateUrl:'templates/Teachersubject.html',
    controller:'TeachersubjectControl'
  })

  .state('CheckTime',{
    url:'/CheckTime',
    templateUrl:'templates/CheckTime.html',
    controller:'CheckTimeControl'
  })

  .state('Admin',{
    url:'/Admin',
    templateUrl:'templates/Admin.html',
    controller:'AdminControl'
  })

  .state('Addactivities',{
    url:'/Addactivities',
    templateUrl:'templates/Addactivities.html',
    controller:'AddactivitiesControl'
  })

  .state('SignupAddmin',{
    url:'/SignupAddmin',
    templateUrl:'templates/SignupAddmin.html',
    controller:'SignupAddminControl'
  })



  $urlRouterProvider.otherwise('/login')
})
