let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let ign = mix.map( ele =>
    isNaN(parseInt(ele)) ? ele : ""
    ).reduce((acc, current) => `${acc}${current}`);
// Elzero
console.log(ign);