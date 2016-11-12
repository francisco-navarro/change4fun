(function() {
   function currencyCtrl(CurrencyService) {
      var ctrl = this;

      CurrencyService.getCurrencies().then(function(data) {
         ctrl.money = data;
      });
   }

   angular.module('app.currencies').component('dashboardWidgetLogin', {
      templateUrl: 'html/login/dashboard-widget-login.html',
      controller: currencyCtrl,
      bindings: {}
   });
}());