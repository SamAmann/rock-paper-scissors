
// Basics variables to be used globally
let play = ["Rock", "Paper", "Scissors"]; //the different choices
let playerScore = 0;
let computerScore = 0;
let numRound = 0;
let gameIsOn = 1;

// The computer's choice, picked among the play array
function getComputerSelection() {
    return (play[Math.floor(Math.random() * play.length)]);
}

// The player's choice
function getPlayerSelection() {
    let playerInput = prompt("What do you want to play?");
    if (playerInput != null) {
        //transform the input to capitalize first letter and lower all else
        playerInput = playerInput.toLowerCase().replace(/^[a-z]/, c => c.toUpperCase());
        //check if the player input is acceptable
        if (play.includes(playerInput)) {
            return playerInput
        } else {
            alert("Your choice must be Rock, Paper or Scissors!")
        }
    } else {
        gameIsOn = 0;
        return null
    }
}


//A single round of game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return null;
    } else {
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
}

function checkScore() {
    if (gameIsOn = 1) {
        if (computerScore < 5 && playerScore < 5) {
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
    console.log(gameIsOn);
}

function printScore() {
    console.log(`Your score: ${playerScore}
Computer score: ${computerScore}`)
}

function game() {
    for (numRound; numRound < 5; numRound++) {
        let round = playRound(getPlayerSelection(), getComputerSelection());
        if (round != null) {
            console.log(round);
            printScore()
        } else {
            let confirmExit = confirm("Do you want to quit?") ? breack : window.close();
        }
    }
    if (computerScore < playerScore) {
        console.log(`Congrats!
You have won this game!`);
    } else {
        console.log(`Sorry... You lost this match!`);
    }
    printScore();
}

game()