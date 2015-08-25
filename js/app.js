// Declare our app module
//import the ngRoute  module into it.
var app = angular.module('app', ['ngRoute']);

//Create our 404 handler
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: 'errors/404/error-404.html'
  });
}]);
