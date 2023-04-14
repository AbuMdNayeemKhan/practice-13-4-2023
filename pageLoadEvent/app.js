function clickme(){ //html event handelar.
    alert("I'm Onclick.");
}

let clickClass = document.querySelector(".clickClass");

//clickClass.onclick = function(){ //dom zero lavel handelar.
//    alert("this message form dom zero lavel handelar.");
//}

let DOMTwo = document.querySelector(".dom2");

DOMTwo.addEventListener("click", function(){ 
    alert("I'm from addEvenListener");
});