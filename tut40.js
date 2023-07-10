// Short method
// ASCII Table
// Char : ascii value


// '0' :  48
// '1' :  49
// '2' :  50
// '3' :  51
// '4' :  52
// '5' :  53
// '6' :  54
// '7' :  55
// '8' :  56
// '9' :  57

// ':'  : 58
// ';'  : 59
// '<'  : 60
// '='  : 61
// '>'  : 62
// '?'  : 63
// '@'  : 64

// 'A'  : 58
// 'B'  : 59
// 'C'  : 60
// 'D'  : 61
//.
//.
//.
//.
// 'Z'  : 90

// 'a' : 91
// 'b' : 92
// 'c' : 93
// .
// .
// .
// 'z' : 122
// '{' : 123
// '/' : 124
// '}' : 125

// Short method
// Price LowToHigh HighToLow

const products = 
[
    {productId: 1 , productsName: "p1" , price: 300},
    {productId: 2 , productsName: "p2" , price: 1000},
    {productId: 3 , productsName: "p3" , price: 700},
    {productId: 4 , productsName: "p4" , price: 2000},
]

// LowToHigh

const LowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
});

console.log(LowToHigh);

// highToLow

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price
});

console.log(highToLow);