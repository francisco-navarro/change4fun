(function() {
   angular.module('app.login').factory('AuthService', AuthService
    );

    /*@ngInject*/
   function AuthService($http) {
      return {
         login: login,
         register: register
      };
      function login(data) {
         return $http.post('api/login', data).then(function(response) {
            return response.data;
         });
      }
      function register(data) {
         return $http.post('api/register', data).then(function(response) {
            return response.data;
         });
      }
   }
}());