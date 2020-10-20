/**
 * Created by JAKOBD on 10/19/2020.
 */

({
    loadData : function(component, event) {
        var action = component.get("c.getInterestedPeople");
        action.setParams({
            catId: component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                var data = response.getReturnValue();
                component.set('v.data', data);
            }else if (state === 'ERROR'){
                console.log('::::::::::::: ERROR :::::::::::::');
                this.showToast('Error occurred while fetching the data', 'error');
            }
        });
        $A.enqueueAction(action);
    }
});