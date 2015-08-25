app.config(['$routeProvider', function ($routeProvider) {
  //object to define the route
  var routeDefinition = {
    controller: 'BikesCtrl',
    controllerAs: 'bikes',
    templateUrl: 'views/bikes.html'
  };

  //angular parses that var here
  $routeProvider.when('/', routeDefinition);
  $routeProvider.when('/bikes', routeDefinition);
}]);


//this is the controller that will be used by bikes.html, according to
//routeDefinition above.
app.controller('BikesCtrl', [
  'allBikes',
  'weatherLab',
function(allBikes, weatherLab) {
  var self = this;

  // This way, in your template you could do <li ng-repeat="bike in bikes.allBikes.list()">
  //view have access to the entire bikes factory, less trouble
  self.allBikes = allBikes;
  weatherLab.getUKWeather()
  .then(function(result) {
    //the weather is result.data
    self.currentWeather=result.data;
  })
  .catch(function(error){
    self.currentWeather="Weather not available."
    // parse info later!
  });


}]);
