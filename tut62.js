function func(){
    let counter = 0;
    return function (){
        if(counter < 1){
            console.log("Hi you called me");
        }
        else{
            console.log("Mai already ek baar call ho chuka hu")
        }
    }
}

const myfunc = func();
myfunc();
myfunc();