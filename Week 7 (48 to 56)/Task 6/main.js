let start = 0;
let swappedName = "elZerO";
let result="";

for (let i = start; i < swappedName.length; i++) {
    swappedName[i] === swappedName[i].toLowerCase() ? (result += swappedName[i].toUpperCase()) : (result += swappedName[i].toLowerCase());
}
console.log(result);
