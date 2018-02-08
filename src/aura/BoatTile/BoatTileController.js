({
  onBoatClick: function(component, event, helper) {
    var selectBoat = component.getEvent("BoatSelect");
    var boatId = component.get("v.boat.Id");
    selectBoat.setParams({
      "boatId": boatId
    });
    selectBoat.fire();
  }
})
