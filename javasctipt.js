function getRandomInt() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  return (Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)); // The maximum is exclusive and the minimum is inclusive
}

let randomNumber = getRandomInt();

console.log(randomNumber);

const a = "rock";
const b = "paper";
const c = "scissors";

function getComputerChoice(a,b,c) {
    if (randomNumber === 1) {
        return a;
    } else if (randomNumber === 2) {
        return b;
    } else return c;
 }

 console.log(getComputerChoice(a,b,c));

 let answer = prompt("Enter 'rock', 'paper' or 'scissors'?")
 answer = answer.toLowerCase();

 function getHumanChoice(a,b,c) {
    if (answer === 'rock') {
        return a;
    } else if (answer === 'paper') {
        return b;
    } else return c;
 }

 console.log(getHumanChoice(a,b,c));

 let computerScore = 0;
 let humanScore = 0;

 console.log(computerScore);
 console.log(humanScore);

 let humanChoice = getHumanChoice(a,b,c);
 let computerChoice = getComputerChoice(a,b,c);

 console.log(computerChoice);
 console.log(humanChoice);

 function playRound(humanChoice, computerChoice) {
    if ((computerChoice = 'rock') && (humanChoice = 'paper')) {
        humanScore = (humanScore + 1);
        alert("You win! Paper beats rock.");
    } else if ((computerChoice = 'rock') && (humanChoice = 'scissors')) {
        computerScore = (computerScore + 1);
        alert("You lose! Rock beats scissors.");
    } else if ((computerChoice = 'paper') && (humanChoice = 'rock')) {
        computerScore = (computerScore + 1);
        alert("You lose! Paper beats rock.");
    } else if ((computerChoice = 'paper') && (humanChoice = 'scissors')) {
        humanScore = (humanScore + 1);
        alert("You win! Scissors beats paper.");
    } else if ((computerChoice = 'scissors') && (humanChoice = 'rock')) {
        humanScore = (humanScore + 1);
        alert("You win! Rock beats scissors.");
    } else if ((computerChoice = 'scissors') && (humanChoice = 'paper')) {
        computerScore = (computerScore + 1);
        alert("You lose! Scissors beats paper.");
    } else computerScore = (computerScore + 0);
        humanScore = (humanScore + 0);
        alert("Equal score! Try again.");
 }