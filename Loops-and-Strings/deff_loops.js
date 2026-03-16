/* for-of loop--> is work on string and array.
    for (let val of strVar) {
        (do some work)
    }
*/
console.log("===== For-of Loop =====");
let str = "Naimul Rabby";
let size = 0;

for (let val of str) { // Iterator -> character
    console.log("val = ", val);
    size++;
}

console.log("String size = ", size);

/* for-in loop --> use in object and arry
    for (let key in objVar) {
        (do some work)
    }
*/
// For-in loop
console.log("\n===== For-In Loop =====");
let student = {
    name: "Jhony",
    age: 20,
    cgpa: 8.67,
    isPass: true,
};

for (let key in student) {
    console.log("Key= ", key , " Value= ", student[key]);
}