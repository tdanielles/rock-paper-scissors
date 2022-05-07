function computerPlay () {
    let playChoices = ['Rock', 'Paper', 'Scissors'];
    return playChoices[Math.floor(Math.random()*playChoices.length)];
}

let playerWins = 0, computerWins = 0;
const results = document.querySelector('#results')
const text = document.createElement('p');
const score = document.querySelector('#score');
const resultText = document.createElement('p');
const playAgain = document.querySelector('#playAgain');

// to play again
playAgain.addEventListener("click", replay, false);

// reloads the page to replay
function replay() {
    replay = location.reload();
}

// listens for an event to start the game
const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('click', () => {
        if (playerWins < 5 && computerWins < 5) {
            playRound(image.alt, computerPlay());
        }
    });
});

// plays a round
function playRound (playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == 'rock') {
            if(computerSelection == 'Paper') {
                computerWins++;
                text.textContent = 'Computer played Paper. Computer wins!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            } else if (computerSelection == 'Rock') {
                text.textContent = 'Computer played Rock. It\'s a tie!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            } else {
                playerWins++;
                text.textContent = 'Computer played Scissors. You win!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            }
        } else if (playerSelection.toLowerCase() == 'paper') {
            if(computerSelection == 'Paper') {
                text.textContent = 'Computer played Paper. It\'s a tie!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            } else if (computerSelection == 'Rock') {
                playerWins++;
                text.textContent = 'Computer played Rock. You win!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            } else {
                computerWins++;
                text.textContent = 'Computer played Scissors. Computer wins!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            }
        } else if (playerSelection.toLowerCase() == 'scissors') {
            if(computerSelection == 'Paper') {
                playerWins++;
                text.textContent = 'Computer played Paper. You win!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            } else if (computerSelection == 'Rock') {
                computerWins++;
                text.textContent = 'Computer played Rock. Computer wins!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            } else {
                text.textContent = 'Computer played Scissors. It\'s a tie!';
                score.textContent = `Computer: ${computerWins}, Player: ${playerWins}`;
            }
        }
        if (gameOver(playerWins, computerWins) == '') {
            resultText.textContent = text.textContent;
        } else {
            resultText.textContent = `${gameOver(playerWins, computerWins)}`;
            playAgain.style.visibility = 'visible';
        }
}

resultText.style.fontSize = '25px';
results.appendChild(resultText);

// determines whether game is over or not
function gameOver(playerWins, computerWins) {
    if (playerWins == 5) {
        return 'GAME OVER. Player wins!';
    } else if (computerWins == 5) {
        return 'GAME OVER. Computer wins!';
    } else {
        return '';
    }
}