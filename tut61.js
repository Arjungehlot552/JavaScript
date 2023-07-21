// Example 1
function hello(x){
    const a = "varA";
    const b = "varB";
    return function (){
        console.log(a,b,x);
    };
} ;

const ans = hello("arg");
ans();

// Example2
function myFunction (power){
    return function(number){
        return number ** power;
    }
}
const square = myFunction(2);
const ans2 = square(3);
console.log(ans2);

const cube = myFunction(4);
const ans3 = cube(3);
console.log(ans3);