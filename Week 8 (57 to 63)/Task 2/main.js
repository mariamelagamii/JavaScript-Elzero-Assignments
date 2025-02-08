function calculate(firstNum, secondNum, operation) {
    if (typeof secondNum==="undefined") {
        return console.log(`Second Number Not Found`);
    }
    let res=0;
    switch (operation) {
        case "multiply":
            res=firstNum*secondNum;
            break;
        case "subtract":
            res=firstNum-secondNum;
            break;
        default:
            res=firstNum+secondNum;
            break;
    }
    return console.log(res);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600