(function() {
   angular.module('app.report').factory('ReportService', ReportService
    );

    /*@ngInject*/
   function ReportService($http) {
      return {
         report: report
      };
      function report(data) {
         return $http.get('api/report', data).then(function(response) {
            return response.data;
         });
      }
   }
}());