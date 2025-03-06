class Car{
    constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
}
run(){
    console.log('Car Is Rinning Now');
}
stop(){
    console.log('Car is Stopped');
}
}

const carOne=new Car('MG','2022',420000);
const carTwo=new Car('KIA','2025',720000);
const carThree=new Car('BMW','2020',500000);
console.log(`Car Name is ${carOne.n} And Model is ${carOne.m} And Price Is ${carOne.p}`);
carOne.run();
// Needed Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"