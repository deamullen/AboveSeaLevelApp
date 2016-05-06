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
