
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3); //Returns 0, 1, or 2
    
    switch (choice){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}


function playRound(inEvent){
    roundCount += 1;
    roundsPlayedElem.textContent = roundCount;

    const computerSelection = getComputerChoice();
    const playerSelection = inEvent.target.classList[1]; // classList[0] is btn, classList[1] is 'rock', 'paper', or 'scissors'

    const computerSelectionDiv = document.querySelector('.computer-selection');
    const playerSelectionDiv = document.querySelector('.player-selection');
    const roundResultDiv = document.querySelector('.round-result');

    //Clear previous results
    computerSelectionDiv.textContent ="";
    playerSelectionDiv.textContent ="";
    roundResultDiv.textContent="";

    console.log('---------- Round start ----------');
    console.log('Computer has selected: '+ computerSelection);
    computerSelectionDiv.textContent = `Computer has selected: ${computerSelection}`;
    console.log('Player has selected: '+ playerSelection);
    playerSelectionDiv.textContent = `Player has selected: ${playerSelection}`;


    //First test for tie
    if (computerSelection === playerSelection) {
        console.log('Round result: tie');
        roundResultDiv.textContent = 'Round result: Tie!';
        if (roundCount >=5){
            return determineWinner();
        }
        else{
            return;
        }
    }
    
    //Then if it's not a tie, test variations for winner
    switch (computerSelection) {
        case 'rock':
            if (playerSelection === 'paper'){
                console.log('Round result: Player Wins');
                roundResultDiv.textContent = 'Round result: Player Wins';
                playerScore +=1;
                playerScoreElem.textContent = playerScore;
                if (roundCount >=5){
                    return determineWinner();
                }
                else{
                    return;
                }
            }
            else if (playerSelection === 'scissors'){
                console.log('Round result: Computer Wins');
                roundResultDiv.textContent = 'Round result: Computer Wins';
                computerScore +=1;
                computerScoreElem.textContent = computerScore;
                if (roundCount >=5){
                    return determineWinner();
                }
                else{
                    return;
                }
            }
            break;

        case 'paper':
            if (playerSelection === 'rock'){
                console.log('Round result: Computer Wins');
                roundResultDiv.textContent = 'Round result: Computer Wins';
                computerScore +=1;
                computerScoreElem.textContent = computerScore;
                if (roundCount >=5){
                    return determineWinner();
                }
                else{
                    return;
                }
            }
            else if (playerSelection === 'scissors'){
                console.log('Round result: Player Wins');
                roundResultDiv.textContent = 'Round result: Player Wins';
                playerScore +=1;
                playerScoreElem.textContent = playerScore;
                if (roundCount >=5){
                    return determineWinner();
                }
                else{
                    return;
                }
            }
            break;
        
        case 'scissors':
            if (playerSelection === 'paper'){
                console.log('Round result: Computer Wins');
                roundResultDiv.textContent = 'Round result: Computer Wins';
                computerScore +=1;
                computerScoreElem.textContent = computerScore;
                if (roundCount >=5){
                    return determineWinner();
                }
                else{
                    return;
                }
            }
            else if (playerSelection === 'rock'){
                console.log('Round result: Player Wins');
                roundResultDiv.textContent = 'Round result: Player Wins';
                playerScore +=1;
                playerScoreElem.textContent = playerScore;
                if (roundCount >=5){
                    return determineWinner();
                }
                else{
                    return;
                }
            }
            break;
    return;
    }


}



function newGame(){
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    gameResult ="";

    roundsPlayedElem.textContent =roundCount;
    computerScoreElem.textContent= computerScore;
    playerScoreElem.textContent= playerScore;
    gameResultElem.textContent= gameResult;
}

function determineWinner(){
    if (playerScore > computerScore){
        gameResult = "Player Wins!";
        gameResultElem.textContent = gameResult;
    }
    else if  (computerScore > playerScore){
        gameResult = "Computer Wins!";
        gameResultElem.textContent = gameResult;
    }
    else {
        gameResult = "Draw!";
        gameResultElem.textContent = gameResult;
    }
}

const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.forEach(button => button.addEventListener('click', function(e){
    if (roundCount >=5){
        newGame();
    }
    playRound(e);
    }
));

let roundsPlayedElem = document.querySelector('#rounds-played');
let computerScoreElem = document.querySelector('#computer-score');
let playerScoreElem = document.querySelector('#player-score');
let gameResultElem = document.querySelector('#game-result');

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let gameResult ="";

roundsPlayedElem.textContent = roundCount;
computerScoreElem.textContent = computerScore;
playerScoreElem.textContent = playerScore;
gameResultElem.textContent = gameResult;