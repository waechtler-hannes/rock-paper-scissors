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
        console.log(`\nYou win! ${firstToUpperCase(humanChoice)} beats ${firstToUpperCase(computerChoice)}.`);
        return "win";
    } else if ((computerChoice === "rock" && humanChoice === "scissor") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissor" && humanChoice === "paper")) {
        console.log(`\nYou lose! ${firstToUpperCase(computerChoice)} beats ${firstToUpperCase(humanChoice)}.`);
        return "lose";
    } else if ((computerChoice === "rock" && humanChoice === "rock") || (computerChoice === "paper" && humanChoice === "paper") || (computerChoice === "scissor" && humanChoice === "scissor")) {
        console.log(`\nIt's a Draw!`);
    } else {
        console.log(`\nUnvalid Input!`);
    }
}

function firstToUpperCase(string) {
    let firstLetter = string.at(0).toUpperCase();
    let lastLetters = string.substr(1,string.length);
    return firstLetter.concat(lastLetters);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log("First to win 3 times wins the game!")
    while(humanScore < 3 && computerScore < 3) {
        let result = playRound(getComputerChoice(), getHumanChoice());
        switch (result) {
            case "win":
                humanScore++;
                break;
            case "lose":
                computerScore++;
                break;
            default:
                break;
        }
        console.log(`Your Score:           ${humanScore}`);
        console.log(`Computer's Score:     ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log('\nCongratulations, you won the game!');
    } else {
        console.log('\nToo bad, you lost the game!')
    }
}

playGame();