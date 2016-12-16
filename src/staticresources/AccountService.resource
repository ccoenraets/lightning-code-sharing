window.AccountService = function(component) {

    return {
        
        findAll: function(callback) {
            var action = component.get("c.getAccounts");
            action.setCallback(this, function(response) {
                if (response.getState() === "SUCCESS") {
                    callback(null, response.getReturnValue());
                } else {
                    callback(response.getError());
                }
            });
            $A.enqueueAction(action);
        },

        findByName: function(name, callback) {
			// implementation here
        },
        
        findById: function(id, callback) {
			// implementation here
        },
        
    };

}