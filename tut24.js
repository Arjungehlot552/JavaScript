// For loop in array

let fruits = ["apple","mango","grapes","banana"];

console.log(fruits.length);
console.log(fruits[fruits.length-1]);
let fruits2 = [];
for(let i = 0; i <= fruits.length-1; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);


// Use const for creating array

//Normal
const pi = 3.14;
console.log(pi);

// In array
const fruits3 = ["apple","mango"];
fruits3.push("banana");
console.log(fruits3);