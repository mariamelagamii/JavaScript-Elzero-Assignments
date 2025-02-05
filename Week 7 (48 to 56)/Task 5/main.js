let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let order = letter.length;
for (let i = order; i < friends.length; i++) {
    if (friends[i][friends.indexOf('Ahmed')] === letter.toUpperCase()) {
        continue;
    }
    console.log(`${order++} => ${friends[i]}`);
}
