({
  init: function(component, event, helper) {
    var navigateToSObjectEvent = $A.get("e.force:navigateToSObject");

    if (navigateToSObjectEvent) {
      component.set("v.showButton", true);
    }
  },
  onFullDetails: function(component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      "recordId": component.get("v.boat.Id")
    });
    navEvt.fire();
  }
})