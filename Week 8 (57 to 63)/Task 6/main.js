function multiply(...params){
    let res = 1;
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] != 'string') {
            res = res * Math.floor(params[i])
        }
    }
    return console.log(res)
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000