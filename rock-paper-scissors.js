
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


function getPlayerChoice() {
    const userInput = prompt('Please choose: Rock, Paper, or Scissors');
    let cleanedUserInput;
    let playerChoice;

    //Keep prompting until we get input
    if (userInput === null || userInput === "") { 
        return getPlayerChoice();
    }
    //Typecast input to string, convert to  lower-case, confirm valid input
    else {
        cleanedUserInput = (userInput.toString()).toLowerCase();

        switch (cleanedUserInput) {
            case 'rock':
                playerChoice = 'rock';
                return playerChoice;
                break;
            case 'paper':
                playerChoice = 'paper';
                return playerChoice;
                break;
            case 'scissors':
                playerChoice = 'scissors';
                return playerChoice;
                break;
            default:
                alert('Invalid input, please enter: Rock, Paper, or Scissors');
                return getPlayerChoice();
        }
    }
}

// Returns 0 if tie, 1 if computer wins, 2 if player wins
function playRound(computerSelection = getComputerChoice(), playerSelection = getPlayerChoice()) {
    console.log('---------- Round start ----------');
    console.log('Computer has selected: '+ computerSelection);
    console.log('Player has selected: '+ playerSelection);

    //First test for tie
    if (computerSelection === playerSelection) {
        console.log('Round result: tie');
        return 0;
    }
    
    //Then if it's not a tie, test variations for winner
    switch (computerSelection) {
        case 'rock':
            if (playerSelection === 'paper'){
                console.log('Round result: Player Wins');
                return 2;
            }
            else if (playerSelection === 'scissors'){
                console.log('Round result: Computer Wins');
                return 1;
            }
            break;

        case 'paper':
            if (playerSelection === 'rock'){
                console.log('Round result: Computer Wins');
                return 1;
            }
            else if (playerSelection === 'scissors'){
                console.log('Round result: Player Wins');
                return 2;
            }
            break;
        
        case 'scissors':
            if (playerSelection === 'paper'){
                console.log('Round result: Computer Wins');
                return 1;
            }
            else if (playerSelection === 'rock'){
                console.log('Round result: Player Wins');
                return 2;
            }
            break;
    return;
    }


}


function game() {
    console.log('***** Starting game *****');
    let computerScore = 0;
    let playerScore = 0;
    let gameResult;

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound();
        switch (roundWinner){
            case 0:
                break;
            case 1:
                computerScore++;
                break;
            case 2:
                playerScore++;
                break;
        }
        console.log(`Score is --- Computer: ${computerScore}  Player: ${playerScore}`);
    }

    if (!(computerScore === playerScore)) {
        gameResult = (computerScore > playerScore) ? "Computer Wins!" : "Player Wins!";
    }
    else{
        gameResult = "Draw";
    }
  
    console.log(`Final Score is --- Computer: ${computerScore}  Player: ${playerScore}. Game result: ${gameResult}`);
}

game();


// const computerSelection = getComputerChoice();
// console.log('Computer has selected: '+ computerSelection);

// const playerSelection = getPlayerChoice();
// console.log('Player has selected: '+ playerSelection);