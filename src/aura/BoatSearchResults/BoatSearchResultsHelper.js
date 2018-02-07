({
  onSearch: function(component) {

    var action = component.get("c.getBoats");
    action.setParams({
      boatTypeId: component.get("v.boatTypeId")
    });

    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        var boats = response.getReturnValue();
        component.set("v.boats", boats);

        if (boats.length == 0) {
          component.set("v.noBoatsFlag", true);
        } else {
          component.set("v.noBoatsFlag", false);
        }
      }
    });

    $A.enqueueAction(action);
  }
})
