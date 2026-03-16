// Practice Question 2 

let gameNum = 25;
let userNum = prompt("Guess the game number : ");

while (userNum != gameNum) {
    // Game 
    userNum = prompt("You enter wrong number. Guess again : ")
}

console.log("Congratulation! You enter the right number.");