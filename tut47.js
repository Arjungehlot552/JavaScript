function about(hobby,favMusician){
        console.log(this.firstName,this.age,hobby,favMusician);
}

const user1 = {
    firstName: "Arjun",
    age:20,
    // about: function(hobby,favMusician){
    //     console.log(this.firstName,this.age,hobby,favMusician);
    // }
}
const user2 = {
    firstName: "Aayansh",
    age:20,
}

// Call
// user1.about.call(user2,"Gaming","Arijit singh");
about.call(user1,"Gaming","Arijit singh");

// Apply
about.apply(user2,["Gaming","Arijit singh"]);

// Bind
const func = about.bind(user2,"guitar", "Honey singh");
func(); 



// Don't Do This Mistake

const someone = {
    firstName:" Nhi pta",
    age : "nhi pta",
    about: function(){
        console.log(this.firstName , this.age);
    }
}

// const myFunc = someone.about;
// myFunc();  // output = undefined 

// Then we use Bind method
const myFunc = someone.about.bind(someone);
myFunc(); 