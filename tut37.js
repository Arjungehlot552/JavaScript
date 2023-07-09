//  Important array method

// 1.For each

const numbers = [4,5,6,6];
function myFunc(number,index){
    console.log(`index is ${index} number is ${number}`)
}
numbers.forEach(myFunc);

//Multiply 3 
numbers.forEach(function(number,index){
    console.log(number*3,index);
})


const users = [
    {firstName: "arjun",age: 20},
    {firstName: "mohit",age: 18},
    {firstName: "prince",age: 20},
    {firstName: "aman",age: 19},
    {firstName: "karan",age: 20},
]
users.forEach(function(user){
    console.log(user.firstName);
    console.log(user.age);
})