// Methods

// Function inside object


function personInfo(){
    console.log(`Person name is ${this.firstName} and the age is ${this.age}.`);
}

const person1 = {
    firstName: "Karan",
    age: 20,
    about: personInfo
}

const person2 = {
    firstName: "Arjun",
    age: 20,
    about: personInfo
}


const person3 = {
    firstName: "Prince",
    age: 20,
    about: personInfo
}


person1.about();
person2.about();
person3.about();