let phone = "+(995)-123 (4567)";
let phoneReg=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(phoneReg));