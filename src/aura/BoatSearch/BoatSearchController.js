({
  onFormSubmit: function(component, event, helper) {
    var formData = event.getParam("formData");
    var searchResultsCmp = component.find("searchResultsCmp");
    searchResultsCmp.search(formData.boatTypeId);
  }
})