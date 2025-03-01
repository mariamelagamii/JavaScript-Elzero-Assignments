let theName = "Elzero";

console.log(Array.from(theName));

console.log([...theName]);

console.log(theName.split(''));

let array4 = [];
for (let i = 0; i < theName.length; i++) {
    array4.push(theName[i]);
}
console.log(array4);

let array5 = Array.prototype.map.call(theName, function (ch) {
    return ch
})
console.log(array5);

let array6 = [...theName].reduce((acc, cur) => {
    acc.push(cur);
    return acc;
}, []);
console.log(array6);
// Needed Output
//['E', 'l', 'z', 'e', 'r', 'o']