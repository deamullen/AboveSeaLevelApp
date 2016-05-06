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
