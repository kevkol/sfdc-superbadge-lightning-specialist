({
  onBoatClick: function(component, event, helper) {
    var boat = component.get('v.boat');

    var boatSelectEvent = component.getEvent("BoatSelect");
    boatSelectEvent.setParams({
      "boatId": boat.Id
    });
    boatSelectEvent.fire();

    var boatSelectedEvent = $A.get('e.c:BoatSelected');
    boatSelectedEvent.setParams({
      "boat": boat
    });
    boatSelectedEvent.fire();

    var plotMapMarkerAppEvent = $A.get("e.c:PlotMapMarker");
    plotMapMarkerAppEvent.setParams({
      "lat": boat.Geolocation__Latitude__s,
      "long": boat.Geolocation__Longitude__s,
      "label": boat.Name,
      "SObjectId": boat.Id
    });
    plotMapMarkerAppEvent.fire();
  }
})
