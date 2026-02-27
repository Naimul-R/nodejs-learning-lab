// Q1 - Get user to input a number using prompt ("Enter a number"). Check if number is a multiple of 5 or not.
let num = prompt("Enter a number: ")

if (num % 5 === 0) {
    console.log(num, "is multiple of 5.");
} else {
    console.log(num, "is NOT multiple of 5.")
}

// Q2 - Write a code which can give grades to students according to their score.
let score = 90;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 0 && score <= 49) {
    grade = "F";
}

console.log("Accoring to your score. Your grade is = ", grade);