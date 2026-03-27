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

// filter method