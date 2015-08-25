/*
Create weather API factory
get function here
.then
.catch (bikes-controller.js)
we want to be able to call weatherLab.getLondon(), which will return the
http request's promise
filter the results from this api later, was short on time
*/

app.factory('weatherLab', ['$http', function($http) {
  //getting by city id
  var baseUrl='http://api.openweathermap.org/data/2.5/weather?id=';
  //local city id = Raleigh, NC
  var localId ='4487042';

  return {
      getLocalWeather: function() {
      return $http.get(baseUrl + localId);
      }
    }
  
}]);

