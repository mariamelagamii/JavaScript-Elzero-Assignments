let num1 = 10;
let num2 = 30;
let num3 = "30";
// Needed Output

if (num3 > num1 && num3 !== num2) {
    console.log(`"${num3} Is Larger Than ${num1} And Type string Not The Same Type As number"`)
} else if (num3 > num1 && num3 == num2 && num3 !== num2) {
    console.log(`"${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number"`)
} else if (num3 !== num1 && num3 !== num2) {
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
} else {
    console.log("Unknown")
}