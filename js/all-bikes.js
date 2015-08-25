/* 
 stores all the bikes in an array of objects
 from bike-factory.js
*/

app.factory('allBikes', function () {
  // capture this variable in a closure
  // & use as our global array of bikes.
  var bikes = [];

  return {
    list: function () {
      return bikes;
    },

    add: function (bike) {
      bikes.push(bike);
    },
    // example to call this in html, if we have a controller named 'bikes' with a property 'allBikes'
    // ng-click="bikes.allBikes.remove(bike)
    remove: function (bike) {
      var index = bikes.indexOf(bike);

      if (index >= 0) {
        bikes.splice(index, 1);
      }
    }
  };

});
