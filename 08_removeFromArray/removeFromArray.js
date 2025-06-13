const removeFromArray = function(array) {
    for (i=0; i< arguments.length; i++){
        array= array.filter(ele => ele!==arguments[i]);
    }
    return array;    
};

// Do not edit below this line
module.exports = removeFromArray;
