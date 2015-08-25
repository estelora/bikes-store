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
  return {
    getUKWeather: function() {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk');
    }
  }

}]);
