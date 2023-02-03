console.log('Test Test Test');

function getComputerChoice(){
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

console.log(getComputerChoice());