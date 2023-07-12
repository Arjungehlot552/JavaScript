// Arrow Function 

const someone = {
    firstName: "Arjun",
    age : "nhi btauga",
    about: () => {
        console.log(this.firstName , this.age);
    }
}
someone.about();