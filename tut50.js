// IF we need to show thousands of data then we use

// Function (that function create abject)
// 2. add key value pair
// 3. Object ko return krega


function createUser(firstName , lastName , age , email , address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function(){
        return`${this.firstName} ${this.lastName} is ${this.age} year old . And the email is ${this.email} , He live in ${this.address}.`;
    },
    user.is18 = function(){
        return this.age>=18;
    }
    return user;
}

const user1 = createUser('Aman','Tiwary', '10','amantiwary123@gmail.com','mera address');
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);