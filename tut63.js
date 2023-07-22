// change text
// textContent and innerText

const mainHeading = document.getElementById("main-heding");
console.log(mainheading.textContent);
mainHeading.textContent = "This us something else";
console.log(mainHeading.textContent);

// change the style of elements
const mainHeading = document.querySelector("div.heading h2");
console.log(mainHeading.style);
mainHeading.style.backgroundColor = "blue";