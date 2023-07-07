 /* 
 Object reference type
 array are good but not sufficient for real world data
 objects store key value pairs
 objects don't have index
*/

 // How to create objects

 const person = {
    name:"Arjun gehlot",
    age:20,
    hobbies:["guitar","singing","sleeping"]
}
console.log(person);

// How to access data from objects

console.log(person.name);
console.log(person.age);
console.log(person["age"]); // we can also use this to print age
console.log(person.hobbies); 

// How to add key value of objects
person.gender = "Male";
console.log(person);