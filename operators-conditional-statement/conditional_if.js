// To implement some condition in the code
// syntex --> Rules
// MDS Doc --> is document theory for all concept for js

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

// else-if Statement for multiple condition 
let modee = "blue";
let colorr;

if (modee === "dark") {
    color = "black";
} else if (modee === "blue") {
    color = "blue";
} else if (modee === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);

/* Ternary Operator 
    condition ? expression_if_true : expression_if_false;

    Structure Explanation:

    condition → Boolean expression (evaluates to true or false)
    ? → Separates condition from the true case
    expression_if_true → Executes if condition is true
    : → Separates true case from false case
    expression_if_false → Executes if condition is false
*/
let agee = 25

let result = age <= 18 ? "Adult" : "Not Adult";
console.log(result);

