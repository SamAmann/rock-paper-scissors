const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resetBtn = document.querySelector("#reset-btn");
const scoreDisplay = document.querySelector(".score");
const resultDisplay = document.querySelector(".result");
const roundDisplay = document.querySelector(".round");

let playerScore = 0;
let computerScore = 0;
let nbrRound = 5;

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultDisplay.textContent = "It's a tie!";
        return;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultDisplay.textContent = `Nice! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        resultDisplay.textContent = `Oh no! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    } nbrRound -= 1;
    scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundDisplay.textContent = `Still ${nbrRound} left to play!`
    if (nbrRound <= 0) {
        checkScore();
    }
}

function checkScore() {
    if (playerScore > computerScore) {
        resultDisplay.textContent = `Congrats! You won that game with by ${playerScore} to ${computerScore}!`;
        disableBtn(true);
    } else if (playerScore < computerScore) {
        resultDisplay.textContent = `Sorry you lost that one by ${playerScore} to ${computerScore}!`;
        disableBtn(true);
    } else {
        resultDisplay.textContent = `Its a tie: ${playerScore} to ${computerScore}!`;

    }
}

function disableBtn(toDisable) {
    rockBtn.disabled = toDisable;
    paperBtn.disabled = toDisable;
    scissorsBtn.disabled = toDisable;
}


function resetGame() {
    disableBtn(false);
    playerScore = 0;
    computerScore = 0;
    nbrRound = 5;
    scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    resultDisplay.textContent = "";
    roundDisplay.textContent = "Game of 5 rounds!";
}

rockBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound("rock", computerSelection);
});

paperBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound("paper", computerSelection);
});

scissorsBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    playRound("scissors", computerSelection);
});

resetBtn.addEventListener("click", resetGame);