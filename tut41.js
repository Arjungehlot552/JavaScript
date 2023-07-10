// Find method

const users = [
    {userId : 1, userName: "Arjun"},
    {userId : 2, userName: "Karan"},
    {userId : 3, userName: "Prince"},
    {userId : 4, userName: "Haritosh"},
    {userId : 5, userName: "Avnish"},
];

const myUser = users.find((user)=>{
    return user.userId===3});
console.log(myUser);


//every method

const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>number%2===0);
console.log(ans);

const products = 
[
    {productId: 1 , productsName: "p1" , price: 300},
    {productId: 2 , productsName: "p2" , price: 1000},
    {productId: 3 , productsName: "p3" , price: 700},
    {productId: 4 , productsName: "p4" , price: 2000},
]

const answer = products.every((productItem)=>productItem.price <10000);
console.log(answer);


// some method

const numbers2 = [3,3,2,5];

// kya ek bhi number esaa hai jo even hai 
// return true

const answer2 = numbers2.some((number)=>{number%2===0});
console.log(answer2);


const userCart = 
[
    {productId: 1 , productsName: "p1" , price: 1000},
    {productId: 2 , productsName: "p2" , price: 5000},
    {productId: 3 , productsName: "p3" , price: 100},
    {productId: 4 , productsName: "p4" , price: 50},
]

const answer3 = userCart.some((cartItem)=>{cartItem.price >5000})
console.log(answer3);