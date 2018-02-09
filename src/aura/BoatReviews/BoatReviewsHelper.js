({
  onInit: function(component, event) {
    var boat = component.get("v.boat");
    var action = component.get("c.getAll");
    action.setParams({
      boatId: boat.Id
    });

    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.boatReviews", response.getReturnValue());
      } else {
        console.log("action failed with state " + state);
      }
    });
    $A.enqueueAction(action);
  },
})
