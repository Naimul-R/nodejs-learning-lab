// forEach is *Higher order function/method.
/* forEach loop in arrays --> forEach is a method.
    arr.forEach (callBackFunction)
    callBackFunciton : Here, it is a function to execute for each element in the array
    *A callBack is a function passed as an argument to another function
*/
// forEach is used when you want to loop through every element of an array and do something with each item 
let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val) {
    console.log(val);
})

// Normally we use arrow to create forEach function 
console.log("\nUsing arrow function.")
let arry = [10, 20, 30, 40, 50];

arry.forEach((val) => {
    console.log(val);
})

// Example
console.log("\nExample.")
let city = ["Dhaka", "Mymenshing", "Barisal"];

// we can use these three parameters.
city.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr)
})