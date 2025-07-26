const add = function() {

  let sum=0; 
/*
  Array.from(arguments).forEach((ele)=>{  //arguments must be converted to an array first.
    if( typeof ele=== "number"){                //Arguments in an array like object available in functions.
      sum+= ele;                                //forEach always returns undefined
    }
    else{
      sum+=ele.length>0? ele.reduce((total, current)=>total+current): 0;
      
      //ele.forEach((item)=>{sum+=Number.parseFloat(item);}); //Must converts the array elements to numbers first
    
    }
  });
*/

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
};


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
