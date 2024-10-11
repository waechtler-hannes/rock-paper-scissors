function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Pick your choice and type "rock", "paper" or "scissor":').toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {
        return humanChoice;
    } else {
        alert('Unvalid input, try again.')
    }
}

function playRound(computerChoice, humanChoice) {
    if ((computerChoice === "rock" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "scissor") || (computerChoice === "scissor" && humanChoice === "rock")) {
        console.log("Win");
    } else if ((computerChoice === "rock" && humanChoice === "scissor") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissor" && humanChoice === "paper")) {
        console.log("Lose");
    } else {
        console.log("Draw");
    }
}