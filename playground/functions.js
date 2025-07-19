/*
 * Implement the following exercises
 * Write a function called add7 that takes one number and returns that number + 7.
 * 
 * Write a function called multiply that takes 2 numbers and returns their product.
 * 
 * Write a function called capitalize that takes a string and returns that string 
 * with only the first letter capitalized. Make sure that it can take strings that are lowercase, 
 * UPPERCASE or BoTh.
 * 
 * Write a function called lastLetter that takes a string and returns the very last letter of that string:
 * lastLetter("abcd") should return "d"
 * 
 */

function add7(num){
    return num+7;
}
let addArrow= (num) =>num+7;

function multiply(num1, num2){
    return num1 * num2;
}

let mutlt= (num1, num2) => num1 * num2;

function capitalize(word){
    if (typeof word != "string"){
        return "Invalid Input";
    }
    if( word.length==0){
        return "The string is empty: " + word;
    }

    if(word.length==1){
        return word.toUpperCase();
    }
    return word.substring(0,1).toUpperCase() + word.substring(1, word.legnth).toLowerCase();
}
function cap(word){
    if (typeof word != "string"){
        return "Invalid Input";
    }
    if( word.length==0){
        return "The string is empty: " + word;
    }
    let i;
    for (i=0; i<word.length; i++){
        if(typeof word.at(i)== "string"){
            return word.substring(0, i).toUpperCase() + word.substring(i, word.length).toLowerCase(); 
        }
    }
    return "The end of the function";
}

function lastLetter(word){
    return word.at(word.length-1);
}

console.log(add7(1));
console.log("Playing around with arrow notation: "+ addArrow(1));

console.log(multiply(3, 9));
console.log("Playing around with arrow notation: "+ multiply(3,9));

let value= "the below Answer Should have only ONE capital letter IN it."
console.log(value);
console.log(capitalize(value));

value="        ";
console.log("The below string are blank");
console.log(value);
console.log(capitalize(value));

value= " 434";
console.log(value);
console.log(capitalize(value));

let val= "     4353 IN this pharse the first characters are blank spaces and numbers";
console.log("First imiplementation: "+ capitalize(val));

val= lastLetter("abcd");
console.log(val);