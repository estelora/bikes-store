/*
 controller for bikes.html
 list all bikes, with access to the the entire bike factory
 takes weather API from weather.js
 .then (parses)
 .catch(error)
*/

app.config(['$routeProvider', function ($routeProvider) {
  // object to define the route
  var routeDefinition = {
    controller: 'BikesCtrl',
    controllerAs: 'bikes',
    templateUrl: 'views/bikes.html'
  };

  // parse the route var here
  $routeProvider.when('/', routeDefinition);
  $routeProvider.when('/bikes', routeDefinition);
}]);


// this is the controller 
// that will be used by bikes.html, according to routeDefinition above.
app.controller('BikesCtrl', [
  'allBikes',
  'weatherLab',
function(allBikes, weatherLab) {
  var self = this;

  // This way, in your template you could do <li ng-repeat="bike in bikes.allBikes.list()">
  // view has access to the entire bikes factory, less trouble
  self.allBikes = allBikes;
 
  // call weather api from weather.js
  weatherLab.getLocalWeather()
  .then(function(result) {
    // the weather api call by location is result.data
    
    var location = result.data.name;
    var currentTemp = Math.round((result.data.main.temp - 273.15) * 1.8000 + 32.00);
    var tempHigh = Math.round((result.data.main.temp_max - 273.15) * 1.8000 + 32.00);
    var tempLow = Math.round((result.data.main.temp_min - 273.15) * 1.8000 + 32.00);
    var weather = result.data.weather[0].description.charAt(0).toUpperCase() + result.data.weather[0].description.slice(1).toLowerCase();

    //reset variables to self
    self.location = location;
    self.currentWeather = weather;
    self.currentTemp = currentTemp;
    self.tempLow = tempLow;
    self.tempHigh = tempHigh;

  })
  .catch(function(error){
    self.currentWeather='Weather not available.'
  });

}]);
