
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
        getPlayerChoice();
    }
    //Typecast input to string, convert to  lower-case, confirm valid input
    else {
        cleanedUserInput = (userInput.toString()).toLowerCase();

        switch (cleanedUserInput) {
            case 'rock':
                playerChoice = 'rock';
                break;
            case 'paper':
                playerChoice = 'paper';
                break;
            case 'scissors':
                playerChoice = 'scissors';
                break;
            default:
                alert('Invalid input, please enter: Rock, Paper, or Scissors');
                getPlayerChoice();
        }

        return playerChoice;
    }
}


const computerSelection = getComputerChoice();
console.log('Computer has selected: '+ computerSelection);

const playerSelection = getPlayerChoice();
console.log('Player has selected: '+ playerSelection);


function playRound(playerSelection, computerSelection) {

}