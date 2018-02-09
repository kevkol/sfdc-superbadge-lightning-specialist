({
  onBoatSelected: function(component, event, helper) {
    var boatSelected = event.getParam("boat");
    component.set("v.id", boatSelected.Id);
    var service = component.find("service");
    service.reloadRecord();
  },
  onRecordUpdated: function(component, event, helper) {
    var boatReviewsCmp = component.find("boatReviewsCmp");
    if (boatReviewsCmp) {
      boatReviewsCmp.refresh();
    }
  },
  onBoatReviewAdded: function(component, event, helper) {
    var boatReviewsCmp = component.find("boatReviewsCmp");
    if (boatReviewsCmp) {
      boatReviewsCmp.refresh();
    }
    component.find("tabs").set("v.selectedTabId", "boatreviewtab");
  }
})
