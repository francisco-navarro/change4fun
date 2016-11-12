(function() {
   angular.module('app', [
      'app.core',
      'app.report',
      'app.login'
   ]).run(function($rootScope) {
      $rootScope.userName = 'packarbell';
   });
}());