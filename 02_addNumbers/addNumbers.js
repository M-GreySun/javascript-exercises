function addNumbers() {
  const a = 1;
  const b = 1;

  let result;

  result= a + b;

  //result= +a + +b; //Both ways are valid solutions if variables a and b were strings or non Numbers
  //If either variable was set to Nan then the answer will be Nan
  //result = Number(a) + Number(b); // <------ EDIT THIS LINE

  return result;
}

// Do not change this
module.exports = addNumbers;
