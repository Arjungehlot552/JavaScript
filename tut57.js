// getter and setters

class person{
    constructor(firstName, lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // Method use as a property with the help of get
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // we can also use
    set fullName(fullName){
          const [firstName , lastName] = fullName.split(" ");
          this.firstName = firstName;
          this.lastName = lastName;
    }

}

const person1 = new person("Arjun" , "Gehlot",5);
console.log(person1);
// console.log(person1.fullName());
// console.log(person1.fullName);
person1.setName("Mohit" , "pawar");
console.log(person1.firstName);
console.log(person1.lastName);