let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let{title,age, available:stat,skills:[skill1,skill2]}=myFriends[chosen-1];
stat = stat ? "Available" : "Not available"
console.log(title);
console.log(age);
console.log(stat);
console.log(skill2);

// If chosen === 1
// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2
// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3
// "Sayed"
// 33
// "Available"
// "Laravel"