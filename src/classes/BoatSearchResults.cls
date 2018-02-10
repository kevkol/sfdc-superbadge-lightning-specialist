public class BoatSearchResults {

  @AuraEnabled
  public static List<Boat__c> getBoats(String boatTypeId) {

    String queryString = 'SELECT Name, BoatType__c, Picture__c, Contact__r.Name,Geolocation__Latitude__s,Geolocation__Longitude__s FROM Boat__c';

    if (!String.isBlank(boatTypeId)) {
      queryString += ' WHERE BoatType__c = :boatTypeId';
    }

    return Database.query(queryString);
  }

}
