// While loop in array

const fruits = ["apple","grapes","banana"];
const fruits2 = [];

let i = 0;
while(i<fruits.length)
{
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);


// For of loop in array

const fruits3 = ["apple","grapes","banana","kya pta"];
const fruits4 = [];

for(let fruit of fruits3){
    fruits4.push(fruit.toUpperCase());
}
console.log(fruits4);