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
            return "Scissor";
            break;
    }
}

function playRound(computerChoice, humanChoice) {
    if ((computerChoice === "Rock" && humanChoice === "Paper") || 
    (computerChoice === "Paper" && humanChoice === "Scissor") || 
    (computerChoice === "Scissor" && humanChoice === "Rock")) {
        console.log(`\nYou win! ${humanChoice} beats ${computerChoice}.`);
    } else if ((computerChoice === "Rock" && humanChoice === "Scissor") || 
    (computerChoice === "Paper" && humanChoice === "Rock") || 
    (computerChoice === "Scissor" && humanChoice === "Paper")) {
        console.log(`\nYou lose! ${computerChoice} beats ${humanChoice}.`);
    } else if ((computerChoice === "Rock" && humanChoice === "Rock") || 
    (computerChoice === "Paper" && humanChoice === "Paper") || 
    (computerChoice === "Scissor" && humanChoice === "Scissor")) {
        console.log(`\nIt's a Draw!`);
    } else {
        console.log(`\nUnvalid Input!`);
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
            playRound(getComputerChoice(), "Scissor");
            break;
    }
});