// Function 
// Input : array target (number)
// output: index of target if target present in array

function findTarget(array, target){
    for(let i =0; i <array.length; i++){
        if(array[i]===target){
            return i;
        }
        return -1;
    }
}
const myArray = [1,2,40,50];
const ans = findTarget(myArray,2);
console.log(ans);