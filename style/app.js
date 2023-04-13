let text = document.querySelector(".text");

let style = getComputedStyle(text, ":hover");

let styleval = style.fontSize;

console.log(styleval);