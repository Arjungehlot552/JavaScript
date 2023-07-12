// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// Unique items only (no duplicates allow)


const items = [ 1,2,3,4,5,5,1];
console.log(items);

// After using set

const UniqueElement = new Set(items);
console.log(UniqueElement);

// How to find length

let length = 0;
for(let element of UniqueElement){
    length++;
}
console.log(length);


// How to add numbers & array in Set

const items1 = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(1);
numbers.add(2);
numbers.add(3);
const array2 = [4, 5, 6]; // Assuming array2 is defined
numbers.add(array2);
numbers.add(items1);
console.log(numbers);

// To check if something is present or not.
if(numbers.has(1)){
   console.log("1 is present in this set")
}
else{
    console.log("1 is not present in this set")
}

// For of loop
// To check Set is  iterable or not
for (let number of numbers){
    console.log(number);
}