({
	afterScriptsLoaded : function(component, event, helper) {
        component.set("v.counter", new Counter());
	},

    getValue : function(component, event, helper) {
        var counter = component.get("v.counter");
		component.set("v.value", counter.getValue());
	},
    
	increment : function(component, event, helper) {
        var counter = component.get("v.counter");
		component.set("v.value", counter.increment());
	}
})