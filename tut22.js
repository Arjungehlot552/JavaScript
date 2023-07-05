// Primitive vs Reference data type 

// Primitive types
let num1 = 5;
let num2 = num1;
console.log("Value of num1  is ",num1);
console.log("Value of num2  is ",num2);
num1++;
console.log("After incrementing num1");
console.log("Value of num1  is ",num1);
console.log("Value of num2  is ",num2);

// Reference types
// Array
let array1 = ["items1","items2"];
let array2 = array1;
console.log("array1 is", array1);
console.log("array2 is", array2);
array1.push("items3");
console.log("after pushing element to array1");
console.log("array1 is", array1);
console.log("array2 is", array2);