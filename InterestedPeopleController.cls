/**
 * Created by JAKOBD on 10/19/2020.
 */

public with sharing class InterestedPeopleController {

    @AuraEnabled
    public static List<Interested_Person__c> getInterestedPeople(Id catId){
        Cat__c myCat = [SELECT Cat_Breed__c from cat__c where id =:catId][0];
        List<Interested_Person__c> persons = [SELECT Id, Name, City__c, Mob__c from Interested_Person__c where
                Cat_Breed__c includes (:myCat.Cat_Breed__c)  and Notify_me__c = true];
        return persons;

    }

}
