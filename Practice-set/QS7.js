// Function Practice Question 
function countVowels (str) {
    // use for-of loop to count all char
    let count = 0;
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        count++
    }
    return count
}