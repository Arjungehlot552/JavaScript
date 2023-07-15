// Limitation recover of previous method
// Code Improve

const userMethods = {

   about: function(){
    return`${this.firstName} ${this.lastName} is ${this.age} year old . And the email is ${this.email} , He live in ${this.address}.`;
     },
    is18: function(){
    return this.age>=18;
  }, 
  // We can create more function 
} 

function createUser(firstName , lastName , age , email , address){
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

const user1 = createUser('Aman','Tiwary', '10','amantiwary123@gmail.com','mera address');
const user2 = createUser('kundan','Tiwary', '10','amantiwary123@gmail.com','mera address');
const user3 = createUser('Manas','Tiwary', '10','amantiwary123@gmail.com','mera address');
const user4 = createUser('MOhit','Tiwary', '10','amantiwary123@gmail.com','mera address');
const user5 = createUser('Suresh','Tiwary', '10','amantiwary123@gmail.com','mera address');
console.log(user1);
console.log(user1.about());
// console.log(user3.about());