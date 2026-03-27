// forEach loop funciton
let nums = [2, 4, 6, 8, 10];

nums.forEach((num) => {
    console.log(num * num); //num** 2
})

// another way 
console.log("\nUsing callBackFunction.");
let numbers = [33, 65, 74, 96];

let calcSquare = (number) => {
    console.log(number ** 2);
}

numbers.forEach(calcSquare);