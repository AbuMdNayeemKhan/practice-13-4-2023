let menu = document.querySelector("#menu");

// let li = document.createElement("li");

// li.textContent = ("Home");

// menu.replaceChild(li, menu.lastElementChild);

// menu.removeChild(menu.firstElementChild);

let cloneMenu = menu.cloneNode(true);

cloneMenu.id = "cloneId";

document.body.appendChild(cloneMenu);