// Default parameters

function addTwo(a,b){
    if(typeof b === "undefined"){
        b = 0;
    }
    return a+b;
}

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4,5);
console.log(ans);


// Rest parameters

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `,c);
}

myFunc(3,5,8,5,8,6,10);


//**************/


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const answer = addAll(4,5,10,6,6);
console.log(answer);