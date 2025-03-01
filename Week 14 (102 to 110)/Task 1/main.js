let promptMsg = prompt("Print Number From – To", "Example: 5-20");

let sortMsg = promptMsg.trim().split("-");

console.log(sortMsg);

sortMsg.reduce(function (acc, curr) {
    if (+acc > +curr) {
        for (i = +curr; i <= +acc; i++) {
            document.write(`${i} <br>`);
        }
    } else {
        for (i = +acc; i <= +curr; i++) {
            document.write(`${i} <br>`);
        }
    }
});