// Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const obj = {
//       [ key1] : "value1",
//       [ key2 ]: "value2"
// }


const obj = {}
      obj[key1] = value1;
      obj[key2] = value2;
      console.log(obj);


// Spread operator
const array1 = [1,2,3];
const array2 = [4,5,6];

//const array newArray = [...array1, ...2,89,50];
const newArray = [..."123456789"];
console.log(newArray);

//Spread operator in object
const obj1 = {
     key1 : "value1",
     key2 : "value2",
};
const obj2 = {
     key3 : "value1",
     key4 : "value2",
};
console.log(obj1);