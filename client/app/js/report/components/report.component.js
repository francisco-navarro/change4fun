(function() {
   function reportCtrl(ReportService) {
      var   ctrl = this;

      ctrl.getReport = function() {
         ReportService.getReport().then(function(response) {
            ctrl.report = response.data;
         });
      }
   }

   angular.module('app.report').component('dashboardWidgetReport', {
      templateUrl: 'html/report/dashboard-widget-report.html',
      controller: reportCtrl,
      bindings: {}
   });
}());