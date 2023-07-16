// Super

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// Inherit 

class Dog extends Animal{
    constructor(name , age , speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return  `${this.name} is running at ${this.speed}`
    }
}

// Object / instance
const tommy = new Dog ("tommy" , 2 , 45);
console.log(tommy.run());