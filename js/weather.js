/* Create weather data from weather API
  get function here
  .then (parsed in bikes-controller.js)
  .catch (bikes-controller.js)
  able to call weatherLab.getLocalWeather(),
  return http request's promise
  filter results (bikes-controller.js)
*/

app.factory('weatherLab', ['$http', function($http) {
  
  //fetch by city id
  var baseUrl='http://api.openweathermap.org/data/2.5/weather?id=';
  //local city id = Raleigh, NC
  var localId ='4487042';

  return {
      getLocalWeather: function() {
      return $http.get(baseUrl + localId);
      }
    }
}]);

