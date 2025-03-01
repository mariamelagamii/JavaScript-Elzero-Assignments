let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// Needed Output
//['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
//["Z", "Y", "Z", "Y", "A", "D", "E"]

let numbers = chars.filter(el => typeof el === "number"); // استخراج الأرقام
let letters = chars.filter(el => typeof el === "string"); // استخراج الأحرف
chars = [...letters.slice(0, numbers.length), ...letters];
console.log(chars);