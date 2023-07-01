// Nested if else 

let Number = 19;
let userGuess = +prompt("Guess a number");
console.log(typeof userGuess);

if(userGuess === Number ){
    console.log("yes you guess right number ")
}
else{
    if(userGuess < Number){
        console.log("too low");
    }
    else{
        console.log("too high !!!");
    }
}