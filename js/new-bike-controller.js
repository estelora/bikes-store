/*
Add a bike
User can edit the bike
done editing (submit and return home)
cancel editing (go home)
go home (go home)
routing to this page from home
call the constructor function*/

app.config(['$routeProvider', function ($routeProvider) {
  //object to define the route
  var routeDefinition = {
    controller: 'NewBikeCtrl',
    controllerAs: 'ctrl',
    templateUrl: 'views/bike-detail.html'
  };

  //angular parses that var here
  $routeProvider.when('/bikes/new', routeDefinition);
}]);


//this is the controller that will be used by new-bike.html, according to
//routeDefinition above.
app.controller('NewBikeCtrl', [
  'allBikes',
  'bikeFactory',
function(allBikes, bikeFactory) {
  var self = this;

//stick the bike in allbikes and go back home~!
self.submitBike=function() {
  allBikes.add(self.bike);
  window.history.back();

}

self.cancel=function() {
  window.history.back();
}
  // call bikeFactory function, which gives us an empty bike object
  self.bike = bikeFactory();
}]);
