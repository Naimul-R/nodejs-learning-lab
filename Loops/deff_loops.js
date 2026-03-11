/* for-of loop--> is work on string and array.
    for (let val of strVar) {
        (do some work)
    }
*/
let str = "Naimul Rabby";
let size = 0;

for (let val of str) { // Iterator -> character
    console.log("val = ", val);
    size++;
}

console.log("String size = ", size);