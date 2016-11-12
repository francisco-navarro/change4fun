(function() {
   function registerCtrl(AuthService) {
      var ctrl = this;

      ctrl.user = {
         email: 'fedegarcia@icloud.com',
         password: 'fede'
      };

      ctrl.register = function() {
         AuthService.register(ctrl.user).then(function(response) {
            ctrl.user = response.data;
         });
      };
   }

   angular.module('app.login').component('dashboardWidgetRegister', {
      templateUrl: 'html/login/dashboard-widget-register.html',
      controller: registerCtrl,
      bindings: {}
   });
}());