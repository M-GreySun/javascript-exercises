const fibonacci = function(term) {
    if(term<0){
        return "OOPS";
    }
    else if(term<=1){
        return Number.parseInt(term);
    }
    return fibonacci(term-1)+ fibonacci(term-2);
};


// Do not edit below this line
module.exports = fibonacci;
