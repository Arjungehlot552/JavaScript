// 2. Map method

const numbers = [3,5,4,8];

const square = function(number){
    return number*number;
}

const squareNumber = numbers.map((number, index)=>{
    return number;
});
console.log(squareNumber);

const users = [
    
        {firstName: "Arjun",age: 20},
        {firstName: "Mohit",age: 18},
        {firstName: "Prince",age: 20},
        {firstName: "Aman",age: 19},
        {firstName: "Karan",age: 20},
    
]
const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);