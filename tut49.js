// Simple fucntion 

const user = {
    firstName: "arjun",
    lastName: "gehlot",
    email: "arjungehlot552@gamil.com",
    age: 20,
    address: "Flat no 505 , shurbhi height , ayodhya bypass",

    about: function(){
        return`${this.firstName} ${this.lastName} is ${this.age} year old . And the email is ${this.email} , He live in ${this.address}.`;
    },
    is18: function(){
        return this.age>=18;
    }
}

const aboutuser = user.about();
console.log(aboutuser);