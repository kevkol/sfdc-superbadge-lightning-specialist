({
  jsLoaded: function(component) {
    component.set("v.jsLoaded", true);
  },

  onPlotMapMarker: function(component, event, helper) {
    console.log('onPlotMapMarker');
    var id = event.getParam('sObjectId');
    var latitude = event.getParam('lat');
    var longitude = event.getParam('long');
    var label = event.getParam('label');

    console.log('latitude', latitude);
    console.log('longitude', longitude);
    component.set('v.location', {
      'lat': latitude,
      'long': longitude
    });
  }
})
