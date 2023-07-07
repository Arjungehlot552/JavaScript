 // Array destructing 

const fruits = ['apple', 'banana', 'orange'];

// Destructuring assignment
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
console.log(thirdFruit);  // Output: 'orange'



const numbers = [1, 2];
const [a, b, c = 3] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3 (default value)

const [x, ...rest] = numbers;

console.log(x);    // Output: 1
console.log(rest); // Output: [2] (remaining elements in a new array)


/*
In the code above, we have an array called fruits that contains three elements.
 By using array destructuring, we assign each element of the array to a separate variable firstFruit,
  secondFruit, and thirdFruit.

The array destructuring syntax [firstFruit, secondFruit, thirdFruit] = fruits on the left 
side of the assignment operator extracts the values from the fruits array and assigns them to the 
respective variables.

After the destructuring assignment, we can access the individual values by referencing the assigned 
variables (firstFruit, secondFruit, and thirdFruit), as shown in the subsequent console.log statements.

Array destructuring is particularly useful when you want to access specific elements of an array
 without explicitly referencing them by their indices. It offers a more intuitive and readable way 
 to extract values from an array.

Note that you can also use array destructuring to assign default values in case an element in
 the array is undefined or missing, and you can also use the rest syntax (...) to capture remaining 
 elements into a new array variable.*/