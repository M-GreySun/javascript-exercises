const add = function(num1, num2) {
  return num1+num2;

  
/*
  //First Implemenation.
  let sum=0;
  Array.from(arguments).forEach((ele)=>{  //arguments must be converted to an array first.
    if( typeof ele=== "number"){                //Arguments in an array like object available in functions.
      sum+= ele;                                //forEach always returns undefined
    }
    else{
      sum+=ele.length>0? ele.reduce((total, current)=>total+current): 0;
      
      //ele.forEach((item)=>{sum+=Number.parseFloat(item);}); //Must converts the array elements to numbers first
    
    }
  });
  return sum
*/
/*
  //Second implementation
  let sum=0;
  for(let i=0; i<arguments.length; i++){
    if(typeof arguments[i]== "number"){
      //console.log("This is a number: "+ arguments[i]);
      sum+=arguments[i];
    }
    else{
      let temp=arguments[i];
        for(let j=0; j< temp.length; j++){
          //console.log("This is an array value: "+ Number.parseFloat(temp[j]));
          sum+=Number.parseFloat(temp[j]);
        }
    }
  }
  
  return sum;
*/
};


const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	return array.length>0? array.reduce((total, ele)=>{return total+ele}): 0;
};

const multiply = function(array) {
  return array.reduce((product, ele)=> {return product*ele;});
};

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(num) {
	let product=1;

  for(let i=2; i<= num; i++){
    product*=i;
  }

  return product;
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
