(function() {
   function reportCtrl(ReportService, $rootScope) {
      var   ctrl = this;

      $rootScope.login = false;
   
      // $(function () {
      //    Highcharts.chart('container', {
      //       data: {
      //             table: 'datatable'
      //       },
      //       chart: {
      //             type: 'column'
      //       },
      //       title: {
      //             text: 'Emisiones esta semana'
      //       },
      //       yAxis: {
      //             allowDecimals: false,
      //             title: {
      //                text: 'Units'
      //             }
      //       },
      //       tooltip: {
      //             formatter: function () {
      //                return '<b>' + this.series.name + '</b><br/>' +
      //                   this.point.y + ' ' + this.point.name.toLowerCase();
      //             }
      //       }
      //    });
      // });   
   }

   angular.module('app.report').component('dashboardWidgetReport', {
      templateUrl: 'html/report/dashboard-widget-report.html',
      controller: reportCtrl,
      bindings: {}
   });
}());