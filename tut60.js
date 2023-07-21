// closures

function outerFunction(){
    function innerFunction(){
        console.log("Hello World")
    }
    return innerFunction;
}
const ans = outerFunction;
console.log(ans);


function printFullName(firstName,lastName){
    function printName(){
        console.log(firstname,lastName);
    }
    return printName;
}
const answer = printFullName("arjun" , "gehlot");
answer(); 