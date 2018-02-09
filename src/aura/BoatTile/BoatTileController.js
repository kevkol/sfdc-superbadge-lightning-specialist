({
  onBoatClick: function(component, event, helper) {
    var boat = component.get('v.boat');

    var boatSelect = component.getEvent("BoatSelect");
    boatSelect.setParams({
      "boatId": boat.Id
    });
    boatSelect.fire();

    var boatSelected = $A.get('e.c:BoatSelected');
    boatSelected.setParams({
      "boat": boat
    });
    boatSelected.fire();
  }
})