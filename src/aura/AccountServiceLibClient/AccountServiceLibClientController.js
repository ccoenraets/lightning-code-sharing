({
	afterScriptsLoaded: function(component, event, helper) {
		
        var service = new AccountService(component);
        service.findAll($A.getCallback(function(error, data) {
            // TODO: Implement proper error handling
        	component.set("v.accounts", data);                           
		}));
        
	}
})