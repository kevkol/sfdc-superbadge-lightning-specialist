public class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {

        String queryString = 'SELECT Name, BoatType__c, Picture__c, Contact__r.Name FROM Boat__c';

        if (!String.isBlank(boatTypeId)) {
            queryString += ' WHERE BoatType__c = :boatTypeId';
        }

        return Database.query(queryString);
    }

}
