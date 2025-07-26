const add = function() {

  let sum=0; 
  Array.from(arguments).forEach((ele)=>{  //arguments must be converted to an array first.
    if( typeof ele=== "number"){                //Arguments in an array like object available in functions.
      sum+= ele;                                //For Each do not return a value.
    }
    else{
      sum+=ele.length>0? ele.reduce((total, current)=>{return total+current}): 0;
    }
  });
  console.log("The date type of sum: "+ typeof sum);
  console.log("The value of sum: "+ sum);
  return sum;
};
let value= add([]);
console.log(typeof value);
value= add([7,11]);
console.log(typeof value);
value =add([7]);
console.log(typeof value);
value= add([1, 3, 5, 7, 9])

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
