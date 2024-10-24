let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

function playRound(computerChoice, humanChoice) {
    const result = document.querySelector("#result");
    const playerScoreDisplay = document.querySelector("#player-score-display");
    const computerScoreDisplay = document.querySelector("#computer-score-display")
    const endResult = document.querySelector("#end-result");
    if (playerScore === 0 && computerScore === 0) {
        endResult.textContent = "";
    }
    if ((computerChoice === "Rock" && humanChoice === "Paper") || 
    (computerChoice === "Paper" && humanChoice === "Scissors") || 
    (computerChoice === "Scissors" && humanChoice === "Rock")) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        playerScoreDisplay.textContent = `Your Score: ${++playerScore}`;
        computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") || 
    (computerChoice === "Paper" && humanChoice === "Rock") || 
    (computerChoice === "Scissors" && humanChoice === "Paper")) {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer's Score: ${++computerScore}`;
    } else if ((computerChoice === "Rock" && humanChoice === "Rock") || 
    (computerChoice === "Paper" && humanChoice === "Paper") || 
    (computerChoice === "Scissors" && humanChoice === "Scissors")) {
        result.textContent = `It's a Draw!`;
        playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
    }
    if (playerScore === 5) {
        endResult.textContent = 'Congratulations, you won the game!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        endResult.textContent = 'You lose the game!';
        playerScore = 0;
        computerScore = 0;
    }
}

const buttons = document.querySelectorAll("button");
document.addEventListener("click", (e) => {
    switch (e.target.textContent) {
        case "Rock":
            playRound(getComputerChoice(), "Rock");
            break;
        case "Paper":
            playRound(getComputerChoice(), "Paper");
            break;
        case "Scissors":
            playRound(getComputerChoice(), "Scissors");
            break;
    }
});