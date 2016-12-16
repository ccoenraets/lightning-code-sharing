({
	getValue : function(component, event, helper) {
		component.set("v.value", counter.getValue());
	},
    
	increment : function(component, event, helper) {
		component.set("v.value", counter.increment());
	}
})