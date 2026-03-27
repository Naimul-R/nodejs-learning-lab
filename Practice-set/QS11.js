let n = prompt("Enter a number : ")

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

// calculate sum using reduce method
let sum = arr.reduce((res, curr) => {
    return res + curr;
})
console.log("sum = ", sum);

// factorial 
let factorial = arr.reduce((res, curr) => {
    return res * curr;
})

console.log(factorial);