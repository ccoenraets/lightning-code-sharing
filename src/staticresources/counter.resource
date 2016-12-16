window.counter = (function(){

    var value = 0;

    return {
        
        increment: function() {
            value = value + 1;
            return value;
        },

        getValue: function() {
            return value;
        }
        
    };

}());