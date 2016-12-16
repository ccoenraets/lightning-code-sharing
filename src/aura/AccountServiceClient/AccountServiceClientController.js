({
	doInit : function(component, event, helper) {
		var service = component.find("service");
		service.findAll(function(error, data) {
			// TODO: Add error handling
			component.set("v.accounts", data);
		});
	}
})