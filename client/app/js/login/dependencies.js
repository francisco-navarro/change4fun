(function() {
   angular.module('app.login', [
      'app.core']).config(function($stateProvider, $urlRouterProvider) {
          var state = 'login';
          var config = {
              abstract: false,
              url: '/login',
              templateUrl: 'html/login/index.html'
           };

          $urlRouterProvider.otherwise(state);
          $stateProvider.state(state, config);
       });
}());