// Array push pop --> Push and pop are fast as coompare to shift and unshift.

let fruits= ["apple","mango","grapes"];
console.log(fruits);

// push
fruits.push("banana");
console.log(fruits);

// pop
let poppedFruits = fruits.pop();
console.log(fruits);
console.log("Popped fruits is", poppedFruits);

//Array shift unshift 

// unshift
fruits.unshift("banana");
fruits.unshift("myfruits");
console.log(fruits);

//shift
let removedFruits = fruits.shift();
console.log(fruits);
console.log("Remove fruits is",removedFruits);