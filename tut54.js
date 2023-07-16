// Class practice and extends keyword

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

}

const animal1 = new Animal("Tom",2);
const tommy = new Dog("Tommy",1);
console.log(tommy);
console.log(tommy.isCute);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());