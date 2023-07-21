// Lexical enviroment , scope chain 

const lastName = " Gehlot ";
const printName = function(){
    const firstName = " Arjun ";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
PrintName();