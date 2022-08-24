// Person object
let Person = {
    first_name: "Siddarth",
    last_name: "Patel",
    getFullName: () => `My full name is ${Person.first_name}  ${Person.last_name}`
}

console.log(Person.getFullName())

// Using a constructor
function person(first, last) {
    this.fist = first
    this.last = last
}

let person1 = new person("Siddarth", "Patel") //object
console.log(person1.fist + person1.last)

// Object.create() example a
// simple object with some properties
const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I
          studying?: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);
 
// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';
 
// Inherited properties can be overwritten
me.isStudying = true;
 
me.printIntroduction();


