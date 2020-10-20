/**
 * Created by JAKOBD on 10/19/2020.
 */

({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'City', fieldName: 'City__c', type: 'text'},
            {label: 'Mob', fieldName: 'Mob__c', type: 'phone'}
        ]);

        helper.loadData(component, event);
    },
});