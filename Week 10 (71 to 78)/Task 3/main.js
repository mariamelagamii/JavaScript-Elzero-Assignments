let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flatArray = myArray
    .reduce((acc, cur) => acc.concat(cur), [])
    .reduce((acc, cur) => acc + cur);
console.log(flatArray); // Elzero