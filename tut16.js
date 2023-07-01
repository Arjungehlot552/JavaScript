// AND OR operator

let firstName = "Arjun";
let age = 22;

// if(firstName[0] === "A"){
//  console.log("Your name starts with A")
// }

// if (age > 18){
//     console.log(" you are above 18 ");
// }

// Both condition should be true
// if (firstName[0]=== "A" && age > 18){
//     console.log("Name starts with A and above 18");
// }
// else {
//     console.log("Inside else");
// }

// If one condition should be true then the code is run
if (firstName[0]=== "A" || age > 18){
    console.log("Inside if");
}
else {
    console.log("Inside else");
}
