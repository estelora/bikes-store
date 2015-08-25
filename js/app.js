/* 
 Declare our app module
 Import the ngRoute  module
*/
var app = angular.module('app', ['ngRoute']);

// Create 404 handler
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: 'errors/404/error-404.html'
  });
}]);
