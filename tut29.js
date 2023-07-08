// How to iterate objects
// Types --
// 1.for...in loop:
// 2.Object.keys():
// 3.Object.entries():

/* The for...in loop iterates over the enumerable properties of
an object, including its inherited properties. It allows you to access
each property name, and you can use it to perform operations on each property.*/

/*The Object.keys() method returns an array containing the enumerable
property names of an object. You can iterate over the array using a for...of 
loop or any array iteration method.*/

/*The Object.entries() method returns an array containing arrays 
of key-value pairs for each enumerable property of an object. You can use
a for...of loop or other array iteration methods to access the key-value pairs.*/

// 1.for...in loop: 
  
  const person = {
    name: 'John',
    age: 25,
    occupation: 'Engineer',
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }
  

// 2.Object.keys():

const person1 = {
  name: 'John',
  age: 25,
  occupation: 'Engineer',
};

const keys = Object.keys(person1);
for (let key of keys) {
  console.log(key + ': ' + person1[key]);
}

// 3.Object.entries():

const person2 = {
  name: 'John',
  age: 25,
  occupation: 'Engineer',
};

const entries = Object.entries(person2);
for (let [key, value] of entries) {
  console.log(key + ': ' + value);
}