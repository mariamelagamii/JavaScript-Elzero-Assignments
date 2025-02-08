let myString = "EElllzzzzzzzeroo";
let myName=myString.split("").filter(function (ele,index,arr){
    return arr.indexOf(ele)===index
}
).join("");
console.log(myName);// Elzero