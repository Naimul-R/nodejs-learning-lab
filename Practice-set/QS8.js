// QS8 - Create a arrow function to perform the same task

// Function Practice Question 
function countVowels (str) {
    // use for-of loop to count all char
    let count = 0;
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        count++
    }
    return count;
}

// Perform same task using Arrow function 
const countVow = (str) => {
    let count = 0;
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        count++
    }
    return count;
}