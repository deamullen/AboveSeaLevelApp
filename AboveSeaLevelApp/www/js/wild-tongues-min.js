!function(){angular.module("sea",["ionic","ui.router","routes","sea.scale","ngCordova"]),angular.module("sea").run(function($ionicPlatform){$ionicPlatform.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})})}(),function(){angular.module("routes",[]),angular.module("routes").config(function($stateProvider,$urlRouterProvider){$stateProvider.state("scale",{url:"/scale",templateUrl:"views/scale.html",controller:"ScaleController"}),$urlRouterProvider.otherwise("/scale")})}(),function(){angular.module("sea.scale",[])}(),function(){function scaleController($scope,$state,$cordovaGeolocation){var options={timeout:1e4,enableHighAccuracy:!0};$cordovaGeolocation.getCurrentPosition(options).then(function(position){$scope.altitude=position.coords.altitude},function(error){console.log("Could not get location")});var watchOptions={timeout:3e3,enableHighAccuracy:!1},watch=$cordovaGeolocation.watchPosition(watchOptions);watch.then(null,function(err){},function(position){$scope.altitude=position.coords.altitude})}angular.module("sea.scale").controller("ScaleController",["$scope","$state","$cordovaGeolocation",scaleController])}();