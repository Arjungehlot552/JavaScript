// __Proto__

const obj1 = {
    key1: "value1",
    key2: "value2",
}

const obj2 = Object.create(obj1);  // {}
// There is no more way to create empty object

obj2.key3 = "value3";
// obj2.key2 = "unique";

console.log(obj2);

// This is happening
// Console.log(obj2.__proto__);