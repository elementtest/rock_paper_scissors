
//randomly select rock paper or scissors for computer
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

//player selection rock paper or scissors
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

//prompt player for choice and make case INSENSITIVE
playerSelection = playerPlay(prompt('what do you throw?').toLowerCase());
console.log('player selection is ' + playerSelection);

//score card global variables comp wins, player wins or ties
var ccScore = 0;
var ppScore = 0;
var tieScore = 0;

//game comparison
function fFinal(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer wins');
        ccScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('Player wins');
        ppScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('player wins');
        ppScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('computer wins');
        ccScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('computer wins');
        ccScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('player wins');
        ppScore += 1;
    } else if (playerSelection == computerSelection) {
        console.log('it is a tie');
        tieScore += 1;
    } else {
        console.log('something went wrong');
        
    }
}

//play five games
fFinal(playerSelection, computerSelection);
console.log('begin for loop');
for (i=0; i<4; i++) {
    fFinal(playerSelection, computerSelection);
    computerSelection = computerPlay();
    console.log('you already played::::' + playerSelection);
    console.log('computer plays ' + computerSelection);
    
};

//print total score after 5 games played
console.log('comp score is ::::  ' + ccScore);
console.log('player score is :::: ' + ppScore);
console.log('amount of times player tied the terminator >> ' + tieScore);

//print who wins overall
if (ccScore > ppScore) {
    console.log('computer wins overall');
} else if (ppScore > ccScore) {
    console.log('the player defeats the terminator');
} else {
    console.log('no winner this time');
}