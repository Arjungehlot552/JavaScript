// Map
// Map is an interable

// store data in ordered fashion

// store key value pair (like object)
// Dublicate keys are not allowed like objects

// Different between maps and objects

// Objects can only have string or symbol 
// as key
// In Maps you can use anything as key
// Like array,number,string

// object literal
// key -> string
// key -> symbol

// Key value pair

const person = new Map();
person.set('firstName','Arjun');
person.set('lastName','Gehlot');
person.set('Age','20');
person.set('occupation','kuch bhi nhi');
person.set([1,2,3],'onetwothree');
console.log(person);
console.log(person.get(1));

// To check typeof
for (let key of person.keys()){
    console.log(key, typeof key);
}

//  For of loop
for (let [key,value] of person)
{
  console.log(key,value)
}

const person1 = {
    id: 101,
    firstName: "Arjun"
}
const person2 = {
    id: 102,
    firstName: "Kusum"
}
 
const extraInfo = new Map ();
extraInfo.set(person1,{age:20,gender:"male"});
extraInfo.set(person2,{age:18,gender:"female"});
// console.log(userInfo);
console.log(person1.id);
console.log(person2.id);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).gender);