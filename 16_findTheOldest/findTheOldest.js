function getAge(person){
  let year= new Date().getFullYear();
  return !person.yearOfDeath? year-person.yearOfBirth: person.yearOfDeath-person.yearOfBirth
}
const findTheOldest = function(people) {
  let oldest= people.reduce((a, b)=> getAge(a)> getAge(b)? a: b);

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
