// Differcence between dot and bracket notation

// .notation
const key = 'email';
const person = {
    name: 'Arjun',
    age: 25,
  };
  
  console.log(person.name); // Output: 'Arjun'  (.notation used for single words)
  console.log(person.age);  // Output: 25
  person[key] = "arjungehlot552@gmail.com";
  console.log(person);

// Bracket notation 

const person1 = {
    'first name': 'Arjun',
    age: 25,
  };
  
  console.log(person1['first name']); // Output: 'Arjun' ([] notation used for when we need space)
  
  const propertyName = 'age';
  console.log(person1[propertyName]); // Output: 25