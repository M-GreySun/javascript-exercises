const repeatString = function(string, number) {
    //  return string.repeat(number);  
    // This solution will not pass all the test cases.
    // One of the test cases states that the built in repeat
    // function can not be used.
    if(number< 0)
        return "ERROR";
    let ans= "";
    for( i=0; i< number; i++){
        ans+=string;
    }
    return ans;
};



// Do not edit below this line
module.exports = repeatString;
