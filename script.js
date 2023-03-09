let playerScore = 0;
let computerScore = 0;

const getPlayerChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
        return userInput
    } else {
        return 'Error, please type: rock, paper or scirssor.'
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'scissor';
        case 2:
            return 'paper';
    }
}

const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'You both chose ' + playerChoice.toUpperCase() + '\nnone of you are winning here!';
    }

    if (playerChoice === 'rock' && computerChoice === 'paper' ||
        playerChoice === 'paper' && computerChoice === 'scissor' ||
        playerChoice === 'scissor' && computerChoice === 'rock') {
        computerScore++;
        return 'Player: ' + playerChoice + '\nComputer: ' + computerChoice + '\ncomputer win';
    } else {
        playerScore++;
        return 'Player: ' + playerChoice + '\nComputer: ' + computerChoice + '\nplayer win';
    }
}
const game = () => {
    playerScore = computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let sign = prompt("Rock, paper, or scissor?");
        sign = getPlayerChoice(sign);
        if (sign === 'rock' || sign === 'paper' || sign === 'scissor') {
            let computerChoice = getComputerChoice();
            let result = playRound(sign, computerChoice);
            console.log(result);
        } else {
            console.log(sign)
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You lose the game!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    } else {
        console.log("The game is tied!\nPlayer Score: " + playerScore + " Computer Score: " + computerScore);
    }
}

game();