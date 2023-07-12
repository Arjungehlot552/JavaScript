// splice method
// start , delete , insert


const myArray = ["Item1","Item2","Item3"];

// Delete

const deletedItems = myArray.splice(1,2);
console.log("deletedItems", deletedItems);

// Insert

myArray.splice(1,0,"insert item");
console.log(myArray);

// Delete and Insert Both

const deletedItems2 = myArray.splice(1 , 2 , "inserted item1", "inserted items2");
console.log("Deleted Items2",deletedItems2);
console.log(myArray);