// Synchronous 
console.log("Synchronise maintain sequence of the code");
console.log("One");
console.log("Two");
console.log("Three");

// Asynchronous 
console.log("Asynchronous skips delay code and run next code");

setTimeout(() => {
    console.log("Hello World");
 }, 4000); //timeout ; 2s = 2000ms

// CallBacks
function sum(a, b){
    console.log(a + b);
}
function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(5, 5, sum); // Callbacks