const findTheOldest = function(people) {

    let max=people.map((ele)=> ele.yearOfDeath-ele.yearOfBirth);
    console.log(max);

    max= max.reduce((num1, num2)=> Math.max(num1, num2));
    console.log(max)

    let oldest=people.filter((ele)=>ele.yearOfDeath-ele.yearOfBirth== max);
    console.log(oldest);
    console.log(oldest.name);
    console.log(oldest[0]);
    console.log(oldest[0].name);
    return oldest[0].name;
    //return oldest[0].name;
};

let people = [
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

    console.log("Who is the oldest: "+ findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
