(function() {

  angular.module('sea', ['ionic', 'ui.router', 'routes', 'sea.scale', 'ngCordova']);

  angular.module('sea')
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

})();

(function() {
  angular.module('routes', []);

  angular.module('routes')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('scale', {
          url : '/scale',
          templateUrl : 'views/scale.html',
          controller : 'ScaleController'
        })
      ;

      $urlRouterProvider.otherwise('/scale');
    });
})();

(function() {
  angular.module('sea.scale', []);
})();

(function() {
  angular.module('sea.scale')
    .controller('ScaleController', ['$scope', '$state', '$cordovaGeolocation', scaleController]);

  function scaleController($scope, $state, $cordovaGeolocation) {
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
      $scope.altitude = position.coords.altitude;

    }, function (error) {
      console.log("Could not get location");
    })

    var watchOptions = {
      timeout : 3000,
      enableHighAccuracy: false // may cause errors if true
    };

    var watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(
      null,
      function(err) {
        // error
      },
      function(position) {
        $scope.altitude = position.coords.altitude;
      });

  }
})();
