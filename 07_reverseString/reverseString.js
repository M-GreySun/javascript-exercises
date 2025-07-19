const reverseString = function(string) {

/*
    //One Solution

    let ans="";
    for (let i= string.length-1; i>=0; i--){
        ans+=string.at(i);
    }
    return ans;
*/
    return string.split("").reverse().join("");

    // If split has no argument every char in the string become an element
    // in the returned array. If split has an empty string then everything
    // is put in to an array of length 1 (meaning only one element)

    //Reverse will reverse the order of the individual elements in an array

    // Join will join the element in the array with the argument. If there
    // is no argument in the join funciton the elements in the array will
    // be joined with commas. If the join functon has an empty string then
    // the element(s) in the array will remain the same.


};

// Do not edit below this line
module.exports = reverseString;
