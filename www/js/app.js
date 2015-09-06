// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','tabSlideBox'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", '$timeout', 
      function($rootScope, $scope, $stateParams, $q, $location, $window, $timeout){
        
        $scope.tabs = [
          {"text" : "S",
             "date": "25",
             "content":" Today is 25" },
           {"text" : "M",
             "date": "26",
             "content":" Today is 26" },
             {"text" : "T",
             "date": "27",
             "content":" Today is 27" },
              {"text" : "W",
             "date": "28",
             "content":" Today is 28" },
              {"text" : "T",
             "date": "29",
             "content":" Today is 29" },
              {"text" : "F",
             "date": "30",
             "content":" Today is 30" },
              {"text" : "S",
             "date": "31",
             "content":" Today is 31" },    
          
        ];
        $scope.contentFlip = false;

        $scope.flipContent = function(){
          $scope.contentFlip = !$scope.contentFlip;
        }
        $scope.onSlideMove = function(data){
          //alert("You have selected " + data.index + " tab");
        };
        }
        ]);
