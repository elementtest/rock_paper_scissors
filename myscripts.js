

function computerPlay() {
    let compChance = Math.floor(Math.random() * 3);
    if (compChance === 0) {
        return "rock";
    } else if (compChance === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
computerSelection = computerPlay();

console.log('computer selection is ' + computerSelection);


function playerPlay(playerChance) {
    
    if (playerChance == 'rock') {
        return "rock";
    } else if (playerChance == 'scissors') {
        return 'scissors';
    } else if (playerChance == 'paper') {
        return 'paper';
    } else {
        return 'something went wrong';
    }

}

playerSelection = playerPlay(prompt('what do you throw?').toLowerCase());

console.log('player selection is ' + playerSelection);

function fFinal(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer wins');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player wins');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('player wins');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('computer wins');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('computer wins');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('player wins');
    } else if (playerSelection == computerSelection) {
        console.log('it is a tie');
    } else {
        console.log('something went wrong');
    }

}

fFinal(playerSelection, computerSelection);