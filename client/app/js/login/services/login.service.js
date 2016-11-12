(function() {
   angular.module('app.login').factory('AuthService', AuthService
    );

    /*@ngInject*/
   function AuthService($http) {
      return {
         login: login
      };
      function login(data) {
         return $http.post('api/login', data).then(function(response) {
            return response.data;
         });
      }
   }
}());