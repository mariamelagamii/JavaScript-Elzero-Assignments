let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let merged = numsOne.concat(numsTwo);
console.log(merged); // [1, 2, 3, 4, 5, 6]

let mergedTwo = [...numsOne, ...numsTwo];
console.log(mergedTwo); // [1, 2, 3, 4, 5, 6]


numsOne.push.apply(numsOne, numsTwo);
console.log(numsOne); // [1, 2, 3, 4, 5, 6]
