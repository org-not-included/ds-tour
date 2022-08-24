const util = require('util');

class Vehicle {
    constructor(name, make, color){
        this.name = name
        this.make = make
        this.color = color
    }
    [util.inspect.custom]() {
        return `name is ${this.name} and make is ${this.make}`;
      }
    getDetails = () => `Name of the vehicle is ${this.name}, make is ${this.make}, color is ${this.color}`
}



// Making objects with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', 'red');
let bike2 = new Vehicle('Ninja', 'Kawasaki', 'blue');

console.log(bike2)
console.log(bike1.getDetails())
// console.log(bike2.getDetails())

bike1.seater = "three"

console.log(bike1)



