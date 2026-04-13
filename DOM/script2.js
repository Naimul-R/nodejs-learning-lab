// Attributes --> 1. getAttribute 2.setAttribute
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);
let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// setAttribute 
let paraSet = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));

// Style is JS
let style = document.querySelector("div");

div.style.backgroundColor = "purple";
div.style.fontSize = "20px";

//div.innerText = "Hello!";

// Insert Element -->
console.log("\nInsert Elements.");

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div2 = document.querySelector("div");
div.append(newBtn);
// div.prepend()
// div.before()
// div.after()
console.log(div2);

// remove element 
// let para = document.querySelector("p");
// para.remove();