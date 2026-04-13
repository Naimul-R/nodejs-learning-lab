let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

// set color style
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

// prepend element
document.querySelector("body").append(newBtn);