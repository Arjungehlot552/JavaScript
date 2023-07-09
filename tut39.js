// 3.Filter method

const numbers = [2,4,5,7,9];

const evenNumbers = numbers.filter((number)=>{
    return number %2 === 0;
});

console.log(evenNumbers);

// 4. Reduce method
//aim : sum of all the number in array

const num = [1,2,5,6,8];

const sum = num.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});

console.log(sum);

// Hows its works
// accumulator  ,    currentValue   ,  return
//     1                  2               3
//     3                  5               8
//     8                  6              14
//    14                  8              22

const userCart = [
    {productID: 1,productName: "Mobile",price:22000},
    {productID: 2,productName: "Laptop",price:50000},
    {productID: 3,productName: "Earphone",price:2000},
    {productID: 4,productName: "Moniter",price:20000},
    {productID: 5,productName: "CPU",price:2000},
]

const totalAmount = userCart.reduce((totalPrice,currentproduct)=>{
    return totalPrice + currentproduct.price;
},0)

console.log(totalAmount);

// Total price       currentvalue          return
//   0                   {}                22000
// 22000               50000               72000
// 72000                2000               74000
// 74000               20000               94000
// 94000                2000               96000
