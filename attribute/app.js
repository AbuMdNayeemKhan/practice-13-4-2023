let btn = document.querySelector(".btn");

// if(btn){
    btn.setAttribute("name", "nayeem");
//     btn.setAttribute("id", 'nayeem');
// }

// if(btn){
//     let targetAttr = btn.getAttribute("name");
//     console.log(targetAttr);
// }

btn.removeAttribute("class");

console.log(btn.hasAttribute("class"));