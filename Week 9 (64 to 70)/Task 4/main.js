function specialMix(...data) {
    let res = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "number") {
            res += data[i];
        } else if (parseInt(data[i])) {
            res += +data[i].slice(0, 2);
        }
    }
    if (res === 0) {
        res = `All Is String`;
    }
    return res
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings