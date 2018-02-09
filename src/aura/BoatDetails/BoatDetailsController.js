({
  onBoatSelected: function(component, event, helper) {
    var boatSelected = event.getParam("boat");
    component.set("v.id", boatSelected.Id);
    var service = component.find("service");
    service.reloadRecord();
  },
  onRecordUpdated: function(component, event, helper) {},
})
