let start = performance.now();
for (let i = 0; i < 30000000; i++) { };
let end = performance.now();

let result = end - start;

console.log(`Loop Took ${result.toFixed()} Milliseconds`);
// Needed Output

"Loop Took 1921 Milliseconds."