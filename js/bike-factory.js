/*
app.factory to construct the bike
define invoice constructor
calculate min and max price
add line item (add an accessory)
delete line item (delete accessory)
*/

// factory creates individual Bike objects
// factory holds an array of all the bike objectsc
app.factory('bikeFactory', function () {
  // And we return our constructor function.
  return Bike;

  // define invoice constructor
  function Bike (spec) {
    spec = spec || {};

    var self = {
      name: spec.brand || 'Unknown Company',
      price: spec.price || 0,
      year: spec.year || 0000,
      previousOwners: spec.previousOwners || 'Nonny Mouse',
      accessories: spec.accessories || [Accessory()],

      getTotalCost: function() {
        return self.accessories.reduce(function (total, item) {
          return total + item.cost;
        }, Number(self.price));
        /* This function is equivalent to:
          var price = self.price;
          self.accessories.forEach(function(item) {
            price += item.price;
          });
          return price;
         */
      },

      addAccessory: function (description, cost) {
        self.accessories.push(Accessory({
          description: description,
          cost: cost
        }));
      },

      deleteAccessory: function (item) {
        var index = self.accessories.indexOf(item);

        if (index >= 0) {
          self.accessories.splice(index, 1);
        }

        // Don't allow 0 line items
        if (!self.accessories.length) {
          self.accessories.push(Accessory());
        }
      }
    };

    return self;
  }

  // accessory class constructor
  function Accessory (spec) {
    spec = spec || {};

    return {
      description: spec.description || 'Enter description',
      cost: spec.cost || 0
    };
  }

});
