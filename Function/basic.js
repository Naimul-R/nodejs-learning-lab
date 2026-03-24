// Block of code that perform a specific task, can be invoked whenever needed.

function myFunction () {
    console.log("Welcome to my JS learning lab.");
    console.log("Cover all topics in this repo.");
}

// Function call or Invoked function
myFunction();
myFunction();

// Function with parameters
console.log("\nFunction with parameters...")
function pmFunction (msg, n) { // msg --> parameter
    // parameter --> input
    console.log(msg, n);
}

pmFunction("I love JS!", 100) // Argument

// Create Function --> 2 numbers, sum
console.log("\nFunction user for sum 2 numbers...")
function sumNum (num1, num2) {
    console.log("20 + 30 = ", num1 + num2);
}

sumNum(30, 20);

// Another way to return output
// fun parameters --> like a local variable of function 
function sum (x, y) {
    // Local variable --> scope
    s = x + y;
    return s;
}

let val = sum(10, 20);
console.log(val);