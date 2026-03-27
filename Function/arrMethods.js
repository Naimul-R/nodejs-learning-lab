// Some more array methods

// Map 
// Creates a new array with the results of some operation. The value its callback returns are used to form new array.
// Example : arr.map(callbackFnx(value, index, array))
let num = [2, 4, 6, 8, 10];

num.map((val) => {
    console.log(val)
})

// return value 
let newArr = num.map((val) => {
    return val * 2;
})
console.log(newArr);

// filter method --> Create a new array of elements that give true for a condition/filter. e.g: all even elements,
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})

console.log("Even Value is = ", evenArr);

// reduce --> to perform some operation & reduces the array to a single value. It returns the single value.
let arry = [1, 2, 3, 4, 5];

const output = arry.reduce((res, curr) => {
    return res + curr;
})
console.log(output);

// find largest number using reduce modules
let numbers = [2, 5, 7, 3];

let output1 = numbers.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(output1);