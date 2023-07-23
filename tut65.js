// callbacks , callback hell , pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
setTimeout(() =>{
    heading1.textContent =" Heading 1";
    heading1.style.color = "red";
    setTimeout(() => {
    heading2.textContent =" Heading 2";
    heading2.style.color = "Blue";
    },1000)
    setTimeout(() => {
    heading3.textContent =" Heading 3";
    heading3.style.color = "green";
    },2000)
    setTimeout(() => {
    heading4.textContent =" Heading 4";
    heading4.style.color = "pink";
    },3000)
    setTimeout(() => {
    heading5.textContent =" Heading 5";
    heading5.style.color = "purple";
    },4000)
    setTimeout(() => {
    heading6.textContent =" Heading 6";
    heading6.style.color = "black";
    },5000)
} , 1000)