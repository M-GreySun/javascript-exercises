const findTheOldest = function(people) {
  let year= new Date().getFullYear();
  people.forEach((ele) => {
        ele['age']= !ele.yearOfDeath? year-ele.yearOfBirth: ele.yearOfDeath-ele.yearOfBirth;
      });
  console.log(people);
  let oldest= people.reduce((a, b)=> a.age> b.age? a: b);
  
  return oldest;
};


let one = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];

let two = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];

    let three = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ];

  console.log("Who is the oldest: "+ findTheOldest(one).name);
  console.log("Who is the oldest: "+ findTheOldest(two).name);
  console.log("Who is the oldest: "+ findTheOldest(three).name);
  
// Do not edit below this line
module.exports = findTheOldest;
