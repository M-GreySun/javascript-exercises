const getTheTitles = function(map) {
/*
    // My implementation
    let array=[];
    map.forEach((ele)=>{
        array.push(ele.title);
    })

    return array;
*/
    return map.map((ele) => ele.title);         //Takes every element in the array and maps it to its title
};

const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]
console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
