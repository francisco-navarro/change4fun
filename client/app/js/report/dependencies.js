(function() {
   angular.module('app.report', [
      'app.core']).config(function($stateProvider, $urlRouterProvider) {
          var state = 'report';
          var config = {
              abstract: false,
              url: '/report',
              templateUrl: 'html/report/index.html'
           };

          
          $stateProvider.state(state, config);
       });
}());