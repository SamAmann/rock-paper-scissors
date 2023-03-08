let play = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// The computer's choice, picked among the play array
function getComputerChoice() {
    return (play[Math.floor(Math.random() * play.length)]);
}

//A single round of game
function gameRound(playerSelection, computerSelection) {

    //check who's won the round using a switch statement
    switch (playerSelection + computerSelection) {

        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors":
            //update player score
            playerScore++;
            return `Congrats, you win because the computer chose ${computerSelection}!`;

        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
            //update computer score
            computerScore++;
            return `Oh no! The computer chose ${computerSelection}! 
You have lost...`;

        default:
            return `It's a tie! The Computer fought back with a ${computerSelection}`;

    }
}

function getPlayerSelection() {
    let playerInput = prompt("What do you want to play?");
    //transform the input to capitalize first letter and lower all else
    playerInput = playerInput.toLowerCase().replace(/^[a-z]/, c => c.toUpperCase());
    //check if the player input is acceptable
    if (playerInput === "Rock" || playerInput === "Paper" || playerInput === "Scissors") {
        return playerInput
    } else {
        alert("Your choice must be Rock, Paper or Scissors!")
    }
}


while (computerScore < 5 && playerScore < 5) {
    console.log(gameRound(getPlayerSelection(), getComputerChoice()));
    console.log(`Current Score!
Yours: ${playerScore}
Computer: ${computerScore}`)
}
if (computerScore === 5) {
    console.log(`The Computer won! You only had ${playerScore}`)
}
if (playerScore === 5) {
    console.log(`You have won! Computer only had ${computerScore}`)
}