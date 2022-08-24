// Abstraction example
function person(fname,lname){
    let firstname = fname;
    let lastname = lname;
 
    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }

    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
let person1 = new person('Mukul','Latiyan');
console.log(person1.firstname); // not printing anythig
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());

/*In the above example we try to access some property(person1.firstname) and functions(person1.getDetails_noaccess) but it returns undefine while their is a method which we can access from the person object(person1.getDetails_access()), by changing the way to define a function we can restrict its scope.*/
