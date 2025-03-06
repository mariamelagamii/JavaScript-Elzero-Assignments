let date = new Date().getTime();
let myBirthDay = new Date("3-22-2003").getTime();
let diff = date - myBirthDay;
let seconds = Math.floor(diff / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let years = Math.floor(days / 365.25); 

console.log(`Time since My birthday:`);
console.log(`${seconds} seconds`);
console.log(`${minutes} minutes`);
console.log(`${hours} hours`);
console.log(`${years} years, ${days % 365} days`);

