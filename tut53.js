// New Keyword
function createUser(firstName , age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}
const user1 = new createUser("arjun",19);
// new keywords
// 1. empty objects this = {}
// 2. return this

user1.about();