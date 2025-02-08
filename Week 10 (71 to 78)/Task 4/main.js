let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let invertNum = numsAndStrings.filter((ele) => typeof ele === "number")
.map((ele) => (-ele)
)
console.log(invertNum);
// [-1, -10, 10, 20, -5, -3]