// trim()     --> remove space
// toUpperCase()
// toLowerCase()
// slice

let firstName = "Arjun";

// console.log(firstName.length);
firstName = firstName.trim();  
console.log(firstName);
console.log(firstName.length);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// start index
// end index

let newString = firstName.slice(0,2);
console.log(newString);