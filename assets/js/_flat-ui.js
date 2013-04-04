// Flat UI

function isPlaceholderSupported() {
 
    var input = document.createElement("input");
    return ('placeholder' in input); 
 
}
 
var supported = isPlaceholderSupported();