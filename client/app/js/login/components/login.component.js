(function() {
   function authCtrl(AuthService) {
      var   ctrl = this;

      ctrl.user = {
         email : 'fedegarcia@icloud.com',
         password : 'fede'
      };

      ctrl.login = function() {
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