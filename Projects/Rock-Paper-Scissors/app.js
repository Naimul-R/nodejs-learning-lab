let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    console.log("Game was draw!");
    msg.innerText = "Game was draw. Play agian!";
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win🥳!");
        msg.innerText = "You Win🥳!";
    } else {
        console.log("You lose😫!");
        msg.innerText = "You lose😫!";
    }
}

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // Generate computer chocie
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    // Create condition to define win, lose or draw 
    if (userChoice === compChoice) {
        // Draw Game 
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // Scissors, Paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice = "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});