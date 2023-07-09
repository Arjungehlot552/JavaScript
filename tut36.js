// Param destructuring

// object
// React

const person = {
    firstName: "Arjun",
    gender: "male",
}

function printDetails(obj){
console.log(obj.firstName);
console.log(obj.gender);
console.log(obj.age);
}

printDetails(person);


// Callback functions

function myFunc2(a){
     console.log("inside my func 2")
     console.log(`"Your name is ${name}"`);
}

function myFunc(Callback){
    const data = {}
    console.log("Hello there I am a func")
    Callback("arjun");
}

myFunc(myFunc2);