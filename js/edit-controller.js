// take the index of bike
// let you edit the inputs
// sumit changes
// return home


app.config(['$routeProvider', function ($routeProvider) {
  //object to define the route
  var routeDefinition = {
    controller: 'EditBikeCtrl',
    controllerAs: 'ctrl',
    templateUrl: 'views/bike-detail.html'
  };

  //angular parses that var here
  // $ in urls are tacky
  $routeProvider.when('/bikes/edit/:index', routeDefinition);
}]);

//this is the controller that will be used by new-bike.html, according to
//routeDefinition above.
app.controller('EditBikeCtrl', [
  'allBikes',
  'bikeFactory',
  '$routeParams',

function(allBikes, bikeFactory, $routeParams) {
  var self = this;

  //get the right bike from the list with index!
  var bikesList = allBikes.list();
  var bike = bikesList[$routeParams.index];

  self.bike = bike;

//just go back home ~ angular updated for us!
self.submitBike=function() {
  window.history.back();

}

self.cancel=function() {
  window.history.back();
}
}]);
