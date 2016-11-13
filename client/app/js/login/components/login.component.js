(function() {
   function authCtrl(AuthService, $rootScope, $location) {
      var   ctrl = this;
      var godmode = true;

      ctrl.user = {
         email : 'fedegarcia@icloud.com',
         password : 'fede'
      };

      $rootScope.login = true;

      ctrl.login = function() {
         if (godmode) {
            $location.path('/report');
            return;
         }
         AuthService.login(ctrl.user).then(function(response) {
            ctrl.user = response.data;
         });
      }
   }

   angular.module('app.login').component('dashboardWidgetLogin', {
      templateUrl: 'html/login/dashboard-widget-login.html',
      controller: authCtrl,
      bindings: {}
   });
}());