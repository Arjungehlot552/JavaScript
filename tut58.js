// Static methods and properties

class person{
    
    constructor(firstName, lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return `this is person class`;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // we can also use
    set fullName(fullName){
          const [firstName , lastName] = fullName.split(" ");
          this.firstName = firstName;
          this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}

const person1 = new person("arjun","gehlot",5);
// console.log(person1.eat());
const info = person.classInfo();
console.log(info);