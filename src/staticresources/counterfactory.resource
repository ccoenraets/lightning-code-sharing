window.Counter = function() {

    var value = 0;
    
    var increment = function() {
        value = value + 1;
        return value;
    };
    
    var getValue = function() {
        return value;
    };
    
    return { // public API
        increment: increment,
        getValue: getValue
    };

};