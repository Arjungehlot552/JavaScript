// Clone using object.assign

// Memory

const obj = {
    key1: "value1",
    key2: "value2",
}

// To add new data in obj.

// const obj2 = {...obj}; // IF we need only add in one object then use

obj.key3 = "value3"; // This is add in both object

const obj2 = Object.assign({},obj);
console.log(obj);
console.log(obj2);


// Optional changing

const user = {
    firstName: "arjun",
    address: {houseNumber: "85"}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);