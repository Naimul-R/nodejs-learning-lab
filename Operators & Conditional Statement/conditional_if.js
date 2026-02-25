// To implement some condition in the code
// syntex --> Rules

// first--> If statement --->
let age = 16;

if (age >= 18) {
    console.log("You can vote.");
}

if (age < 18) {
    console.log("You CANNOT vote");
}

// Mode color 
let mode = "dark";
let color;

if (mode == "dark") {
    color = "black";
}

if (mode == "light") {
    color = "white";
}

console.log(color);

// Secound If-else Statement --->
if (mode == "dark") {
    color = "black";
} else {
    color = "white";
}

console.log(color);

// FInd out Odd & Even number using If-else
let num = 15;

if (num % 2 === 0) {
    console.log(num, "Is Even.");
} else {
    console.log(num, "Is Odd");
}