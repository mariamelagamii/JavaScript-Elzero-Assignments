// Needed Output
let date = new Date();
date.setDate(0)
let monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
console.log(date);
console.log(`Previous Month Is ${monthNames[date.getMonth()]} And Last Day Is ${date.getDate()}`);
