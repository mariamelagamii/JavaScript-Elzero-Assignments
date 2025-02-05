let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
while (index<friends.length) {
    if (friends[index][0]==="A" || typeof friends[index]== "number") {
        index++;
        continue;
    }
    console.log(`${++counter} => ${friends[index++]}`);
}
