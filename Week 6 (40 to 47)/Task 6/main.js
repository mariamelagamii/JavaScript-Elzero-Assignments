let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=arr1.concat(arr2).sort();
allArrs=allArrs.slice(allArrs.indexOf('F')).join("").toLowerCase();

console.log(allArrs); // fxy
