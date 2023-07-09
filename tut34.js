 // Block scope vs function scope

 // Let and const are block scope
 
 {
     let firstName = "Arjun";
    }
    console.log(firstName); // show an arror
    
    {
        let firstName = "Arjun";
        console.log(firstName); // Do not show error this is block scope
    }
    
    
    // var is function scope
    
    
    {
       var firstName = "Arjun";
    }
    console.log(firstName); // Do not show error this is var function scope
    